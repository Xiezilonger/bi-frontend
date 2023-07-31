import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
import {CSDN_LINK, WELCOME} from "@/constants";
const Footer: React.FC = () => {
  const defaultMessage = '瓜大软工倾情出品';
  const currentYear = new Date().getFullYear();
  const beian = '桂ICP备2023002099号-1';
  const beianUrl = 'https://beian.miit.gov.cn/#/Integrated/index';
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      // @ts-ignore
      copyright={
        <>
          {currentYear} {defaultMessage}
          {/*{currentYear} {defaultMessage} |{' '}*/}
          {/*<a href={beianUrl} target="_blank" rel="noreferrer">*/}
          {/*  {beian}*/}
          {/*</a>*/}
        </>
      }
      links={[
        {
          key: 'Zilong博客 ',
          title: 'Zilong博客 ',
          href: CSDN_LINK,
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/Xiezilonger',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
