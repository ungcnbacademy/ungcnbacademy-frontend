'use client';
import React, { useContext, useEffect, useState } from 'react';
import styles from './page.module.css';
import Cart from '@/components/client/product/cart';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';
import Select from '@/components/ui/select/select';
import Input from '@/components/ui/input/input';
import Button from '@/components/ui/button/button';
import { CartContext } from '@/context/cartContext';
import { getSubTotal } from '@/utility/utils';
import Message from '@/components/ui/message/message';
import OrderStatus from '@/components/client/checkout/orderStatus';
import { useRouter } from 'next/navigation';
export default function Checkout() {
	const [
		responseGetProfile,
		errorGetProfile,
		loadingGetProfile,
		axiosFetchGetProfile,
	] = useAxios();
	const router = useRouter();
	const [response, error, loading, axiosFetch] = useAxios();
	const [address, setAddress] = useState(); //for saving addressId
	const [modifiedAddress, setModifiedAddress] = useState();
	const [instruction, setInstruction] = useState();
	const [paymentMethod, setPaymentMethod] = useState();
	const [message, setMessage] = useState();
	const { globalCart } = useContext(CartContext);
	useEffect(() => {
		axiosFetchGetProfile({
			method: 'GET',
			url: configuration.client.profile,
		});
	}, []);

	const handleDeliveryAddress = () => {
		if (address) {
			const deliveryAddress = responseGetProfile?.data?.addresses.find(
				(addr) => addr._id === address
			);
			setModifiedAddress({
				street: deliveryAddress?.street,
				city: deliveryAddress?.city,
				area: deliveryAddress?.area,
				postalCode: deliveryAddress?.postalCode,
			})
		}
	};

	useEffect(() => {
		handleDeliveryAddress();
	}, [address]);

	useEffect(() => {
		if (globalCart.length < 1) {
			router.push('/');
		}
	}, []);

	const createOrderButtonHandler = () => {
		if (!address && !instruction && !paymentMethod) {
			alert('Please fill all the fields');
			return;
		}
		const data = {
			customer: responseGetProfile?.data?._id,
			stallId: globalCart.stallId,
			orderItems: [
				...globalCart?.orderItems.map((item) => {
					return {
						foodName: item.foodName,
						foodPrice: item.foodPrice,
						quantity: item.quantity,
					};
				}),
			],
			deliveryAddress: {
				...modifiedAddress,
				deliveryInstructions: instruction,
			},
			paymentMethod,
			totalAmount: getSubTotal(globalCart?.orderItems),
			vat: 0,
			orderType: 'online',
			deliveryFee: 0,
		};

		axiosFetch({
			method: 'POST',
			url: configuration.client.order,
			requestConfig: data,
		});
	};

	useEffect(() => {
		if (response?.message) {
			setMessage({ text: response?.message, type: 'success' });
		} else if (error?.message) {
			setMessage({ text: error?.message, type: 'error' });
		}
	}, [response, error]);

	return (
		<div className={styles.main}>
			<div className={styles.left}>
				<div className={styles.container}>
					<h2 className={styles.title}>Delivery Address</h2>
					<label className={styles.label}>Delivery address</label>
					<Select
						options={responseGetProfile?.data?.addresses?.map(
							(address) => {
								return {
									label: `${address?.label},${address?.street}, ${address?.area}, ${address?.city}, ${address?.postalCode}`,
									value: address._id,
								};
							}
						)}
						variant="secondary"
						onChange={(e) => setAddress(e.target.value)}
					/>
					<label className={styles.label}>Delivery instruction</label>
					<Input
						variant="secondary"
						type="text"
						name="name"
						placeholder="Delivery instruction"
						onChange={(e) => setInstruction(e.target.value)}
					/>
				</div>
				<div className={styles.container}>
					<h2 className={styles.title}>Payment</h2>
					<label className={styles.label}>Payment method</label>
					<Select
						options={[
							{
								label: 'Cash on delivery',
								value: 'COD',
							},
						]}
						variant="secondary"
						onChange={(e) => setPaymentMethod(e.target.value)}
					/>
				</div>
				<div className={styles.container}>
					<h2 className={styles.title}>Personal Details</h2>
					<label className={styles.label}>User Name</label>
					<p>{responseGetProfile?.data?.name}</p>
					<label className={styles.label}>Email</label>
					<p>{responseGetProfile?.data?.email}</p>
					<label className={styles.label}>Phone</label>
					<p>{responseGetProfile?.data?.phone}</p>
				</div>
				<div className={styles.container2}>
					<br />
					<h2 className={styles.title}>Create Order</h2>
					<Message text={message?.text} type={message?.type} />
					<Button
						text="Create Order"
						onClick={createOrderButtonHandler}
						loading={loading}
						disabled={loading}
					/>
					<div className={styles.terms}>
						<p>
							By making this purchase you agree to our terms and
							conditions .{' '}
						</p>
						<p>
							I agree that placing the order places me under an
							obligation to make a payment in accordance with the
							General Terms and Conditions.
						</p>
					</div>
				</div>
			</div>
			<div className={styles.right}>
				<OrderStatus />
			</div>
		</div>
	);
}
