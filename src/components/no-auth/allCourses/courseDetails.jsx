import React from 'react';
import styles from './courseDetails.module.css';
import Image from 'next/image';
import Collapse from '@/components/ui/collapse/collapse';
import Avatar from '@/components/ui/avatar/avatar';
import CoursePriceContainer from './coursePriceContainer';
import { FaSquareXTwitter, FaLinkedin } from 'react-icons/fa6';
import { FaGlobeAmericas } from 'react-icons/fa';
import { formatDuration } from '@/utils/utils';

export default function CourseDetails({ response }) {

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

          <br />
          <div>
            {response?.data?.longDescription && (
              <div
                dangerouslySetInnerHTML={{
                  __html: response?.data?.longDescription,
                }}
                className={styles.longDescription}
              ></div>
            )}
          </div>
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
            <h3 className={styles.title}>Instructor</h3>
            {response?.data?.instructors &&
              response?.data?.instructors?.map((instructor, i) => (
                <div key={i} className={styles.instructor}>
                  <Avatar
                    image={instructor?.image && instructor?.image}
                    name={!instructor?.image && instructor?.name}
                    size={80}
                  />
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
              ))}
          </div>
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
