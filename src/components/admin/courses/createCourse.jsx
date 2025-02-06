'use client';
import Input from '@/components/ui/input/input';
import React, { useEffect, useRef, useState } from 'react';
import Button from '@/components/ui/button/button';
import useAxios from '@/hooks/useAxios';
import Message from '@/components/ui/message/message';
import { configuration } from '@/configuration/configuration';
import Select from '@/components/ui/select/select';
import styles from './createCourse.module.css';
import { allAdminRoles, userRoles } from '@/constants/constants';
import TextEditor from '../atom/textEditor';
export default function CreateCourse() {
	const [response, error, loading, axiosFetch] = useAxios();
	const formRef = useRef(null);
	const [message, setMessage] = useState({ text: '', type: '' });
	const [longDescription, setLongDescription] = useState();
	useEffect(() => {
		if (response?.message) {
			setMessage({ text: response?.message, type: 'success' });
		}
		if (error?.message) {
			setMessage({ text: error?.message, type: 'error' });
		}
	}, [response, error]);
	const onClearHandler = () => {
		setMessage({ text: '', type: '' });
		formRef.current.reset();
	};

	const onCreateCourseSubmitHandler = (event) => {
		event.preventDefault();
		setMessage({ text: '', type: '' });
		const formData = new FormData(event.target);
		const formDataObject = Object.fromEntries(formData);

		formData.delete('title');
		formData.delete('description');
		formData.delete('category');
		formData.delete('price');
		formData.delete('modulePrice');
		formData.delete('featured');

		formData.delete('instructorName');
		formData.delete('instructorDesignation');
		formData.delete('instructorDescription');
		formData.delete('bio');
		formData.delete('linkedin');
		formData.delete('twitter');
		formData.delete('website');

		const courseData = {
			title: formDataObject.title,
			description: formDataObject.description,
			longDescription: longDescription, // Use the longDescription state
			category: formDataObject.category,
			price: formDataObject.price,
			modulePrice: formDataObject.modulePrice,
			featured: formDataObject.featured,
			instructors: [
				{
					name: formDataObject.instructorName,
					designation: formDataObject.instructorDesignation,
					description: formDataObject.instructorDescription,
					bio: formDataObject.bio,
					socialLinks: {
						linkedin: formDataObject.linkedin,
						twitter: formDataObject.twitter,
						website: formDataObject.website,
					},
				},
			],
		};

		formData.append('courseData', JSON.stringify(courseData));

		axiosFetch({
			method: 'POST',
			url: configuration.courses,
			requestConfig: formData,
		});
	};

	return (
		<div className={styles.main}>
			<form
				className={styles.form}
				onSubmit={onCreateCourseSubmitHandler}
				ref={formRef}
			>
				<p className={styles.subTitle}>Course details:</p>
				<p className={styles.label}>Title</p>
				<Input
					type="text"
					placeholder="Course Title"
					name="title"
					variant="secondary"
					required
				/>
				<p className={styles.label}>Course Description</p>
				<Input
					type="text"
					placeholder="Course Description"
					name="description"
					variant="secondary"
					required
				/>
				<p className={styles.label}>Long Description</p>
				<TextEditor setData={setLongDescription} />
				<p className={styles.label}>Category</p>
				<Input
					type="text"
					placeholder="Category"
					name="category"
					variant="secondary"
					required
				/>
				<p className={styles.label}>Course image</p>
				<Input
					type="file"
					placeholder="Course Image"
					name="thumbnail"
					variant="secondary"
				/>
				<p className={styles.label}>Is Featured?</p>
				<Select
					name="featured"
					options={[
						{ label: 'Yes', value: true },
						{ label: 'No', value: false },
					]}
					variant="secondary"
				/>
				<p className={styles.subTitle}>Pricing:</p>
				<p className={styles.label}>Course price in BDT</p>
				<Input
					type="number"
					placeholder="Course Price"
					name="price"
					variant="secondary"
					required
				/>
				<p className={styles.label}>Module price in BDT</p>
				<Input
					type="number"
					placeholder="Module Price"
					name="modulePrice"
					variant="secondary"
					required
				/>

				<p className={styles.subTitle}>Instructor:</p>
				<p className={styles.label}>Instructor name</p>
				<Input
					type="text"
					placeholder="Instructor Name"
					name="instructorName"
					variant="secondary"
					required
				/>
				<p className={styles.label}>Instructor description</p>
				<Input
					type="text"
					placeholder="Instructor Description"
					name="instructorDescription"
					variant="secondary"
				/>
				<p className={styles.label}>Instructor designation</p>
				<Input
					type="text"
					placeholder="Instructor Designation"
					name="instructorDesignation"
					variant="secondary"
				/>
				<p className={styles.label}>Instructor bio</p>
				<Input
					type="text"
					placeholder="Instructor Bio"
					name="bio"
					variant="secondary"
				/>
				{/* <p className={styles.label}>Instructor expertise</p>
				<Input
					type="text"
					placeholder="Instructor Expertise"
					name="instructorExpertise"
					variant="secondary"
				/>
				<p className={styles.label}>Instructor achievements</p>
				<Input
					type="text"
					placeholder="Instructor Achievements"
					name="achievements"
					variant="secondary"
				/> */}
				<p className={styles.subTitle}>Instructor Social Links:</p>
				<p className={styles.label}>Linkedin</p>
				<Input
					type="text"
					placeholder="Linkedin"
					name="linkedin"
					variant="secondary"
				/>
				<p className={styles.label}>Twitter</p>
				<Input
					type="text"
					placeholder="Twitter"
					name="twitter"
					variant="secondary"
				/>
				<p className={styles.label}>Website</p>
				<Input
					type="text"
					placeholder="Website"
					name="website"
					variant="secondary"
				/>

				<div className={styles.submitContainer}>
					<Message
						text={message.text}
						type={message.type}
						loading={loading}
					/>
					<div className={styles.buttonContainer}>
						<Button
							text="Clear"
							variant="outLined"
							disabled={loading}
							onClick={onClearHandler}
						/>
						<Button
							type="submit"
							text="Submit"
							variant="primary"
							loading={loading}
							disabled={loading}
						/>
					</div>
				</div>
			</form>
		</div>
	);
}
