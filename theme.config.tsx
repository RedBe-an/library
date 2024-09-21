import React, { ComponentProps, ReactElement } from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const LIBRARY_LOGO = (props: ComponentProps<"svg">): ReactElement => (
  <svg height="20" viewBox="0 0 291 69" fill="none" {...props}>
    <path
      fill="currrentColor"
      d="M224,52H160a36.02912,36.02912,0,0,0-32,19.53955A36.02912,36.02912,0,0,0,96,52H32A12.01343,12.01343,0,0,0,20,64V192a12.01343,12.01343,0,0,0,12,12H96a28.03146,28.03146,0,0,1,28,28,4,4,0,0,0,8,0,28.03146,28.03146,0,0,1,28-28h64a12.01343,12.01343,0,0,0,12-12V64A12.01343,12.01343,0,0,0,224,52ZM96,196H32a4.00427,4.00427,0,0,1-4-4V64a4.00427,4.00427,0,0,1,4-4H96a28.03146,28.03146,0,0,1,28,28V209.39648A35.949,35.949,0,0,0,96,196Zm132-4a4.00427,4.00427,0,0,1-4,4H160a35.94218,35.94218,0,0,0-28,13.40747V88a28.03146,28.03146,0,0,1,28-28h64a4.00427,4.00427,0,0,1,4,4Z"
    />
  </svg>
);

const FOOTER_LINK_TEXT = <>Powered By LIBRARY</>;

const config: DocsThemeConfig = {
  logo: (
    <span>
      <strong>Library</strong>
    </span>
  ),
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – LIBRARY",
      };
    }
  },
  project: {
    link: "https://github.com/RedBe-an/library",
  },
  docsRepositoryBase: "https://github.com/RedBe-an/library/tree/main",
  footer: {
    text: function useText() {
      const { locale } = useRouter();
      return FOOTER_LINK_TEXT;
    },
  },
  head: function useHead() {
    const { title } = useConfig();
    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="ko" />
        <meta
          name="description"
          content="도서관 속의 지식으로 새로운 것을 만들어보세요"
        />
        <meta
          name="og:description"
          content="도서관 속의 지식으로 새로운 것을 만들어보세요"
        />
        <meta
          name="og:title"
          content={title ? title + " – LIBRARY" : "LIBRARY"}
        />
        <meta name="apple-mobile-web-app-title" content="LIBRARY" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    );
  },
  toc: {
    backToTop: true,
  },
  editLink: {
    text: "깃허브에서 이 페이지 편집하기 →",
  },
  feedback: {
    content: "피드백 달기 →",
    labels: "feedback",
  },
  banner: {
    key: "2.0-release",
    text: (
      <a href="https://github.com/RedBe-an/library" target="_blank">
        LIBRARY 더 알아보기 →
      </a>
    ),
  },
};

export default config;
