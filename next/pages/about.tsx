import React from 'react';
import Layout from '../components/Layout';
import MouseOverPopover from '../components/MouseOverPopover';
import Image from 'next/image';
import Link from 'next/link';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'About - Sid Menon',
      }}
    >
      <h1>About Page</h1>
      <Image
        alt={'Profile Picture'}
        src={'/images/profile-picture.jpg'}
        width={300}
        height={300}
        layout={'intrinsic'}
        priority
      />
      <p>
        I&lsquo;m a senior at Harvard college, studying Computer Science and
        Math. I&lsquo;m an{' '}
        <Link href="https://www.instagram.com/sidkmenon_cooks/">
          amateur chef
        </Link>
        ,{' '}
        <Link href="https://en.wikipedia.org/wiki/Roger_Federer">
          tennis enthusiast
        </Link>
        , travel junkie, and an all-around great guy. Professionally, I&lsquo;m
        interested in data infrastructure, machine learning, and distributed
        systems. <br /> Please do feel free to reach out at any of the below
        contacts!
      </p>
      <p>Previously at:</p>
      <ul className="list-disc pl-4 my-6">
        <li className="mt-2">
          <MouseOverPopover
            description={
              <span>
                <Link href="https://dagster.io">Elementl</Link> - Engineering
                Fellow (Full Stack)
              </span>
            }
          >
            At Elementl, I was a full-time contributor to open-source project{' '}
            Dagster and committed 15,000+ lines of tested, performant code,
            primarily using Python (Graphene), Typescript (ReactJS, GraphQL,
            Apollo), and Kubernetes (Helm).
            <br />I authored the dagster-mysql library to onboard a large (~$30B
            market cap) enterprise user, and the dagster-graphql client library
            which addressed the most liked Github issue on the open source
            project <br /> I also collaborated on development of a hosted cloud
            product and responsible for the design and implementation of the
            audit log feature, which provides insight into user actions on a
            Dagster Cloud deployment.
          </MouseOverPopover>{' '}
        </li>
        <li className="mt-2">
          <MouseOverPopover
            description={
              <span>
                <Link href="https://aws.amazon.com/">Amazon AWS</Link> - SDE
                Intern (Full Stack)
              </span>
            }
          >
            At AWS, I worked in the Supply Chain org in a full stack role. I
            automated two common search queries and revitalized a legacy web
            application, reducing query latency by at least three orders of
            magnitude for AWS supply chain customers. I utilized Java server
            APIs, Elasticsearch, and a new frontend page using Typescript
            (ReactJS, GraphQL, Apollo). <br /> I also designed Order Tracker
            microservice requiring highly available, real-time search across
            millions of documents using a variety of AWS technologies, including
            Elasticsearch and DynamoDB.
          </MouseOverPopover>{' '}
        </li>
        <li className="mt-2">
          <MouseOverPopover
            description={
              <span>
                <Link href="https://www.flowcode.com/page">
                  The DTX Company
                </Link>{' '}
                - Freelance SWE (Backend)
              </span>
            }
          >
            At the DTX company, I built the backend server for the MVP flow.page
            product using Typescript (GraphQL, Node.js) and PostgreSQL to enable
            users to create homepages to collect their social media accounts,
            musical interests, images, etc. I also used Azure Blob and Firebase
            to create the image and profile hosting services.{' '}
          </MouseOverPopover>{' '}
        </li>
        <li className="mt-2">
          <MouseOverPopover
            description={
              <span>
                <Link href="https://www.str.us/">
                  Systems and Technology Research
                </Link>{' '}
                - Machine Learning Engineering Intern
              </span>
            }
          >
            At STR, I performed feature collision, watermarking, and
            convex-polytope based attacks on deep-CNN based image classifiers. I
            utilized forwards-backwards splitting algorithm and model ensemble
            methods to show greater than 50% attack accuracy is achievable with
            less than 1% drop in performance on ensemble networks (ResNet 50,
            VGG16/19, MobileNet) on a variety of datasets (mnist, cifar10, etc.)
            using Keras and Tensorflow 1.0.
          </MouseOverPopover>{' '}
        </li>
      </ul>
    </Layout>
  );
};

export default About;
