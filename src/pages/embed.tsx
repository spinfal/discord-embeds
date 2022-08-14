import {NextPage, NextPageContext} from "next";
import { useRouter } from "next/router";
import { Button, Text } from "@nextui-org/react";
import Head from "next/head";

interface EmbedData {
  title: string;
  description: string;
  color: string;
}

interface Props {
    data: EmbedData;
}

const Embed: NextPage<Props> = ({data}: Props) => {
  if (!data) {
    return <div>No data found</div>;
  }

  return (
    <>
      <Head>
        <meta property="og:title" content={data.title ?? ""} />
        <title>Embed</title>
        <meta property="og:description" content={data.description ?? ""} />
        <meta name="description" content={data.description ?? ""} />
        <meta name="theme-color" content={data.color ?? ""} />
      </Head>
      <div className="flex flex-col items-center justify-center h-screen">
        <Text h3>
          This is an automatically generated page used for Discord embeds.
        </Text>
        <Text h4>Want to create your own embed?</Text>
        <div className={"mt-5"}>
          <Button bordered color="primary" auto onClick={() => {
            window.location.href = "/";
          }}>Get started</Button>
        </div>
      </div>
    </>
  );
};

export function getServerSideProps(context: NextPageContext) {
  const data = context.query.data as string;

  // Decode the base64 data
  const dataJson = Buffer.from(data ?? "", "base64").toString("utf8");
  // Parse the JSON data
  const dataObj: EmbedData = JSON.parse(dataJson);

  return {
    props: {
      data: dataObj,
    },
  };
}

export default Embed;
