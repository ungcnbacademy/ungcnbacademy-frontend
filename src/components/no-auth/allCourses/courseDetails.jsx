import React from 'react';
import styles from './courseDetails.module.css';
import Image from 'next/image';
import Collapse from '@/components/ui/collapse/collapse';
import Avatar from '@/components/ui/avatar/avatar';
import CoursePriceContainer from './coursePriceContainer';
import { FaSquareXTwitter, FaLinkedin } from 'react-icons/fa6';
import { FaGlobeAmericas } from 'react-icons/fa';
import { formatDuration } from '@/utils/utils';
import ViewTrailer from '@/components/admin/courses/trailer/viewTrailer';
import Carousel from '@/components/ui/carousel/carousel';
import Tabs from '@/components/ui/tabs/tabs';

export default function CourseDetails({ response }) {
  const instructorsCarouselSlides = response?.data?.instructors?.map((instructor, i) => (
    <div key={i} className={styles.instructor}>
      <Avatar image={instructor?.image && instructor?.image} name={!instructor?.image && instructor?.name} size={100} />
      <p className={styles.name}>{instructor?.name} </p>
      <p> {instructor?.designation} </p>
      <p className={styles.bio}>{instructor?.bio} </p>
      <div className={styles.socialLinks}>
        {instructor?.socialLinks?.linkedin && (
          <a className={styles.socialLink} href={instructor?.socialLinks?.linkedin} target="_blank">
            <FaLinkedin /> Linkedin
          </a>
        )}
        {instructor?.socialLinks?.twitter && (
          <a className={styles.socialLink} href={instructor?.socialLinks?.twitter} target="_blank">
            <FaSquareXTwitter /> Twitter
          </a>
        )}
        {instructor?.socialLinks?.website && (
          <a className={styles.socialLink} href={instructor?.socialLinks?.website} target="_blank">
            <FaGlobeAmericas /> Website
          </a>
        )}
      </div>
    </div>
  ));

  const courseWysiwygRender = (content) => {
    return (
      <div>
        {content && (
          <div
            dangerouslySetInnerHTML={{
              __html: content,
            }}
            className={styles.longDescription}
          ></div>
        )}
      </div>
    );
  };

  const courseKnowledgePartnersRender = () => {
    return (
      <div>
        <h3 className={styles.title}>Our partners</h3>
        <div className={styles.knowledgePartner}>
          {response?.data?.knowledgePartImage1 && (
            <Image
              src={response?.data?.knowledgePartImage1}
              alt="course image"
              width={100}
              height={100}
              className={styles.partnerImage}
            />
          )}
          {response?.data?.knowledgePartImage2 && (
            <Image
              src={response?.data?.knowledgePartImage2}
              alt="course image"
              width={100}
              height={100}
              className={styles.partnerImage}
            />
          )}
          {response?.data?.knowledgePartImage3 && (
            <Image
              src={response?.data?.knowledgePartImage3}
              alt="course image"
              width={100}
              height={100}
              className={styles.partnerImage}
            />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.main}>
      <div
        className={styles.imageContainer}
        style={response?.data?.thumbnail ? { backgroundImage: `url(${response?.data?.thumbnail})` } : {}}
      >
        <div className={styles.imageWrapper}>
          <Image
            src={response?.data?.thumbnail || '/assets/noImage.svg'}
            alt={response?.data?.title || 'Course'}
            width={500}
            height={500}
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.courseTitle}>{response?.data?.title}</h1>
          <p className={styles.category}>Category: {response?.data?.category}</p>
          <p className={styles.description}>{response?.data?.description}</p>

          {response?.data?.trailerCloudflareVideoId && (
            <div>
              <br />
              <h3 className={styles.title}>Trailer</h3>
              <ViewTrailer videoId={response?.data?.trailerCloudflareVideoId} />
            </div>
          )}
          <br />
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
          <br />
          <div>
            <h3 className={styles.title}>Course content</h3>
            <p className={styles.subtitle}>
              {response?.data?.statistics?.totalModules} Modules, {response?.data?.statistics?.totalLessons} Lessons,{' '}
              {formatDuration(response?.data?.statistics?.totalDuration)} Duration, {response?.data?.statistics?.totalQuizzes}{' '}
              Quizzes
            </p>
            {response?.data?.modules?.length > 0 &&
              response?.data?.modules?.map((module, i) => (
                <Collapse
                  key={i}
                  data={[
                    {
                      title: `Module ${module.order}: ${module.title}`,
                      description: module.description,
                      children:
                        module?.lessons?.length > 0 &&
                        module?.lessons?.map((lesson, i) => (
                          <Collapse
                            key={i}
                            variant="secondary"
                            data={[
                              {
                                title: `Lesson ${lesson.order}: ${lesson.title}`,
                                description: lesson.description,
                                children: (
                                  <div className={styles.lessonAssets}>
                                    {lesson?.duration > 0 && lesson?.duration && (
                                      <label>Duration {formatDuration(lesson?.duration)},</label>
                                    )}
                                    {lesson?.totalAssets > 0 && <label>Total Assets {lesson?.totalAssets}</label>}
                                  </div>
                                ),
                              },
                            ]}
                          />
                        )),
                    },
                  ]}
                />
              ))}
          </div>
          <br />
          <div>
            <h3 className={styles.title}>Instructors</h3>
            {response?.data?.instructors && <Carousel slides={instructorsCarouselSlides || []} showArrows={false} />}
          </div>
          <br />
          {(response?.data?.knowledgePartImage1 || response?.data?.knowledgePartImage2) && courseKnowledgePartnersRender()}
        </div>
        <div className={styles.right}>
          <CoursePriceContainer courseInfo={response?.data} />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
