import Items from '@/components/client/product/items';
import ShopDetails from '@/components/client/product/shopDetails';
import { getFetchRequests } from '@/fetch/getFetchRequests';
import React from 'react';
export default async function Product({ params }) {
	const resolvedParams = await params;
	const productId = resolvedParams.id;
	const response = await getFetchRequests.getStoreById(productId);

	return (
		<>
			<ShopDetails
				name={response?.data?.motherStall}
				logo={response?.data?.imageUrl}
				banner={response?.data?.bannerUrl}
				description={response?.data?.description}
			/>
			<Items
				items={response?.data?.menu}
				stallId={response?.data?._id}
				stallName={response?.data?.motherStall}
			/>
			<br />
			<br />
		</>
	);
}
