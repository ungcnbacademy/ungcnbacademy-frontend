'use client';
import { configuration } from '@/configuration/configuration';
import useAxios from '@/hooks/useAxios';
import { getAmountsWithCommas } from '@/utils/utils';
import moment from 'moment';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import LoadingDots from '@/components/ui/loading/loadingDots';
import Drawer from '@/components/ui/drawer/drawer';
import Button from '@/components/ui/button/button';
import AllModules from '@/components/admin/courses/modules/allModules';
import CreateModule from '@/components/admin/courses/modules/createModule';
import { TbWorld } from 'react-icons/tb';
import { IoLogoLinkedin } from 'react-icons/io';
import { AiOutlineTwitter } from 'react-icons/ai';
import Avatar from '@/components/ui/avatar/avatar';
import PopoverList from '@/components/ui/popover/popoverList';
import { RiVideoAddLine, RiVideoAiLine } from 'react-icons/ri';
import { MdDeleteOutline } from 'react-icons/md';
import { LiaEdit } from 'react-icons/lia';
import CreateTrailer from '@/components/admin/courses/trailer/createTrailer';
import ViewTrailer from '@/components/admin/courses/trailer/viewTrailer';
import Modal from '@/components/ui/modal/modal';
import AddInstructor from '@/components/admin/courses/addInstructor';
import UpdateSingleInstructor from '@/components/admin/courses/updateSingleInstructor';
import Toast from '@/components/ui/toast/toast';
import Tabs from '@/components/ui/tabs/tabs';
import AddCourseDescription from '@/components/admin/courses/addCourseDescription';
import AddKnowledgePartner from '@/components/admin/courses/addKnowledgePartner';

export default function CourseDetails({ params }) {
  const unwrappedParams = React.use(params);
  const courseId = unwrappedParams.id;
  const [response, error, loading, axiosFetch] = useAxios();
  const [isDrawerOpenCreateModule, setIsDrawerOpenCreateModule] = useState(false);
  const [isDrawerOpenAddTrailer, setIsDrawerOpenAddTrailer] = useState(false);
  const [isDrawerOpenAddInstructor, setIsDrawerOpenAddInstructor] = useState(false);
  const [isDrawerOpenUpdateInstructor, setIsDrawerOpenUpdateInstructor] = useState(false);
  const [isDrawerOpenCourseDescription, setIsDrawerOpenCourseDescription] = useState(false);
  const [isDrawerOpenKnowledgePartners, setIsDrawerOpenKnowledgePartners] = useState(false);
  const [selectedInstructor, setSelectedInstructor] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState({ text: '', variant: '' });
  const [responseDelete, errorDelete, loadingDelete, axiosFetchDelete] = useAxios();
  const [refreshData, setRefreshData] = useState(false);

  useEffect(() => {
    axiosFetch({
      method: 'Get',
      url: `${configuration.courses}/${courseId}`,
    });
  }, [courseId, refreshData]);

  useEffect(() => {
    if (responseDelete?.message) {
      setMessage({ text: responseDelete?.message, variant: 'success' });
      setRefreshData(!refreshData);
    }
    if (errorDelete?.message) {
      setMessage({ text: errorDelete?.message, variant: 'error' });
    }
    if (loadingDelete) {
      setMessage({ text: 'Deleting...', variant: 'info' });
    }
  }, [responseDelete, errorDelete, loadingDelete]);

  // utility functions

  const deleteInstructor = (instructorId) => {
    const data = { instructorId };
    confirm('Are you sure you want to delete this instructor?') &&
      axiosFetchDelete({
        method: 'DELETE',
        url: `${configuration.courses}/${courseId}/instructors`,
        requestConfig: { data },
      });
  };

  const courseWysiwygRender = (content) => {
    return (
      <>
        <div className={styles.longDescriptionContainer}>
          {content && <div className={styles.longDescription} dangerouslySetInnerHTML={{ __html: content }}></div>}
        </div>
      </>
    );
  };

  //drawer render functions

  const drawerRenderCreateModule = () => {
    return (
      <>
        {isDrawerOpenCreateModule && (
          <Drawer title="Create Module" closeFunction={() => setIsDrawerOpenCreateModule(false)}>
            <CreateModule courseId={courseId} refresh={() => setRefreshData(!refreshData)} />
          </Drawer>
        )}
      </>
    );
  };

  const drawerRenderAddTrailer = () => {
    return (
      <>
        {isDrawerOpenAddTrailer && (
          <Drawer title="Add Trailer" closeFunction={() => setIsDrawerOpenAddTrailer(false)}>
            <CreateTrailer courseId={courseId} />
          </Drawer>
        )}
      </>
    );
  };

  const drawerRenderAddInstructor = () => {
    return (
      <>
        {isDrawerOpenAddInstructor && (
          <Drawer title="Add Instructor" closeFunction={() => setIsDrawerOpenAddInstructor(false)}>
            <AddInstructor courseId={courseId} refresh={() => setRefreshData(!refreshData)} />
          </Drawer>
        )}
      </>
    );
  };

  const drawerRenderUpdateInstructor = () => {
    return (
      <>
        {isDrawerOpenUpdateInstructor && (
          <Drawer title="Update Instructor" closeFunction={() => setIsDrawerOpenUpdateInstructor(false)}>
            <UpdateSingleInstructor courseId={courseId} data={selectedInstructor} refresh={() => setRefreshData(!refreshData)} />
          </Drawer>
        )}
      </>
    );
  };

  const drawerRenderCourseDescription = () => {
    return (
      <>
        {isDrawerOpenCourseDescription && (
          <Drawer title="Course Description" closeFunction={() => setIsDrawerOpenCourseDescription(false)} size="lg">
            <AddCourseDescription id={courseId} refresh={() => setRefreshData(!refreshData)} content={response?.data} />
          </Drawer>
        )}
      </>
    );
  };

  const drawerRenderKnowledgePartners = () => {
    return (
      <>
        {isDrawerOpenKnowledgePartners && (
          <Drawer title="Knowledge Partners" closeFunction={() => setIsDrawerOpenKnowledgePartners(false)}>
            <AddKnowledgePartner courseId={courseId} refresh={() => setRefreshData(!refreshData)} />
          </Drawer>
        )}
      </>
    );
  };

  //render functions

  const courseBannerRender = () => {
    return (
      <>
        {response?.data?.thumbnail && (
          <>
            <Image
              src={response?.data?.thumbnail || '/assets/noImage.svg'}
              alt="course image"
              width={820}
              height={360}
              className={styles.image}
            />
            <br /> <br />
          </>
        )}
      </>
    );
  };

  const courseDetailsRender = () => {
    return (
      <div>
        {response?.data && (
          <div className={styles.details}>
            <h2 className={styles.title}>{response?.data?.title}</h2>
            <p># {response?.data?._id}</p>
            <p> Description: {response?.data?.description}</p>
            <p> Category: {response?.data?.category}</p>
            <p>Price: {getAmountsWithCommas(response?.data?.price)}</p>
            <p>
              Created At:
              {moment(response?.data?.createdAt).format('lll')}
            </p>
          </div>
        )}
      </div>
    );
  };

  const courseModuleRender = () => {
    return (
      <div>
        <div className={styles.header}>
          <h2 className={styles.title}>Modules</h2>
          <div className={styles.buttonContainer}>
            <Button
              text="Create Module"
              variant="primary"
              onClick={() => setIsDrawerOpenCreateModule(!isDrawerOpenCreateModule)}
            />
            <PopoverList
              text="Trailer"
              variant="secondary"
              data={[
                {
                  title: 'Add Trailer',
                  icon: <RiVideoAddLine />,
                  function: () => setIsDrawerOpenAddTrailer(!isDrawerOpenAddTrailer),
                },
                {
                  title: 'Watch Trailer',
                  icon: <RiVideoAiLine />,
                  function: () => {
                    setIsModalOpen(true);
                  },
                },
              ]}
            />
          </div>
        </div>
        <AllModules id={courseId} />
      </div>
    );
  };

  const courseDescriptionRender = () => {
    return (
      <>
        <div className={styles.header}>
          <h2 className={styles.title}>Course Description</h2>
          <div className={styles.buttonContainer}>
            <Button
              text="Add Course Description"
              variant="primary"
              onClick={() => setIsDrawerOpenCourseDescription(!isDrawerOpenCourseDescription)}
            />
          </div>
        </div>
        <Tabs
          items={[
            { title: 'Description', content: courseWysiwygRender(response?.data?.longDescription) },
            {
              title: 'Overview',
              content: response?.data?.courseOverview ? courseWysiwygRender(response?.data?.courseOverview) : '',
            },
            { title: 'Learning', content: response?.data?.learning ? courseWysiwygRender(response?.data?.learning) : '' },
            { title: 'Requirements', content: response?.data?.courseReq ? courseWysiwygRender(response?.data?.courseReq) : '' },
            {
              title: 'Benefits',
              content: response?.data?.courseBenefit ? courseWysiwygRender(response?.data?.courseBenefit) : '',
            },
            { title: 'Why Choose', content: response?.data?.whyChoose ? courseWysiwygRender(response?.data?.whyChoose) : '' },
          ]}
        />
      </>
    );
  };

  const courseInstructorRender = () => {
    return (
      <div>
        <div className={styles.instructorHeader}>
          <h2 className={styles.title}>Instructors</h2>
          <Button text="Add Instructor" variant="primary" onClick={() => setIsDrawerOpenAddInstructor(true)} />
        </div>

        {response?.data?.instructors &&
          response?.data?.instructors?.map((instructor, i) => (
            <div key={i} className={styles.instructor}>
              <div className={styles.topContainer}>
                <Avatar name={instructor?.name} className={styles.avatar} image={instructor?.image} size={100} />
                <PopoverList
                  variant="secondary"
                  text="Action"
                  data={[
                    {
                      title: 'Edit Instructor',
                      icon: <LiaEdit />,
                      function: () => {
                        setSelectedInstructor(instructor);
                        setIsDrawerOpenUpdateInstructor(true);
                      },
                    },
                    {
                      title: 'Delete Instructor',
                      icon: <MdDeleteOutline />,
                      function: () => {
                        deleteInstructor(instructor?._id);
                      },
                    },
                  ]}
                />
              </div>
              <p>
                <b>Name:</b> {instructor?.name}
              </p>
              <p>
                {' '}
                <b>Designation:</b> {instructor?.designation}
              </p>
              <p>
                {' '}
                <b>Bio:</b> {instructor?.bio}
              </p>
              <h5 className={styles.socialTitle}>Social Links</h5>
              <div className={styles.socialContent}>
                <TbWorld />
                {instructor?.socialLinks?.website ? (
                  <a href={instructor?.socialLinks?.website} target="_blank" className={styles.socialLink}>
                    {instructor?.socialLinks?.website}
                  </a>
                ) : (
                  <p>Not available</p>
                )}
              </div>

              <div className={styles.socialContent}>
                <IoLogoLinkedin />
                {instructor?.socialLinks?.linkedin ? (
                  <a href={instructor?.socialLinks?.linkedin} target="_blank" className={styles.socialLink}>
                    {instructor?.socialLinks?.linkedin}
                  </a>
                ) : (
                  <p>Not available</p>
                )}
              </div>
              <div className={styles.socialContent}>
                <AiOutlineTwitter />
                {instructor?.socialLinks?.twitter ? (
                  <a href={instructor?.socialLinks?.twitter} target="_blank" className={styles.socialLink}>
                    {instructor?.socialLinks?.twitter}
                  </a>
                ) : (
                  <p>Not available</p>
                )}
              </div>
            </div>
          ))}
      </div>
    );
  };

  const trailerModalRender = () => {
    return (
      <Modal title="Trailer" isModalOpen={isModalOpen} closeFunction={() => setIsModalOpen(false)}>
        <ViewTrailer courseId={courseId} />
      </Modal>
    );
  };

  const courseKnowledgePartnerRender = () => {
    return (
      <>
        <div className={styles.header}>
          <h2 className={styles.title}>Knowledge Partners</h2>
          <Button text="Add Knowledge Partner" variant="primary" onClick={() => setIsDrawerOpenKnowledgePartners(true)} />
        </div>
        <div className={styles.knowledgePartners}>
          <Image src={response?.data?.knowledgePartImage1 || '/assets/noImage.svg'} alt="knowledge partner image" width={200} height={100} className={styles.knowledgeImg}/>
          <Image src={response?.data?.knowledgePartImage2 || '/assets/noImage.svg'} alt="knowledge partner image" width={200} height={100} className={styles.knowledgeImg}/>
        </div>
      </>
    );
  };

  return (
    <>
      <Toast text={message?.text} variant={message?.type} />
      {loading && <LoadingDots />}

      {drawerRenderCreateModule()}
      {drawerRenderAddTrailer()}
      {drawerRenderAddInstructor()}
      {drawerRenderUpdateInstructor()}
      {drawerRenderCourseDescription()}
      {drawerRenderKnowledgePartners()}
      {trailerModalRender()}

      {!loading && !error && (
        <>
          {courseBannerRender()}
          {courseDetailsRender()} <br />
          {courseModuleRender()} <br /> <br />
          {courseDescriptionRender()} <br />
          {courseInstructorRender()} <br />
          {courseKnowledgePartnerRender()}
        </>
      )}
    </>
  );
}
