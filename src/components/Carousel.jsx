// components/Carousel.js
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

// Import the required Swiper modules
import { Pagination } from "swiper/modules";

// Import images
import groceries from "../../public/groceries.png";
import money from "../../public/money.png";
import padlock from "../../public/padlock.png";

const Carousel = () => {
  return (
    <div className="w-full max-w-lg bg-transparent">
      <Swiper
        modules={[Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="flex justify-center items-center h-full w-full rounded-full bg-[#F6F2FF] overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={210}
              height={195}
              fill="none"
            >
              <g filter="url(#a)">
                <ellipse
                  cx={162.631}
                  cy={37.579}
                  fill="#632FD9"
                  rx={22.968}
                  ry={22.026}
                  transform="rotate(.312 162.631 37.58)"
                />
                <ellipse
                  cx={162.642}
                  cy={35.694}
                  fill="#A17BF9"
                  rx={22.968}
                  ry={22.026}
                  transform="rotate(.312 162.642 35.694)"
                />
                <path
                  fill="#FAFAFA"
                  fillOpacity={0.4}
                  fillRule="evenodd"
                  d="M141.872 25.782c4.153-7.283 11.918-12.163 20.786-12.114 9.435.05 17.56 5.666 21.389 13.771-4.153 7.283-11.919 12.163-20.787 12.115-9.434-.052-17.56-5.667-21.388-13.772Z"
                  clipRule="evenodd"
                />
                <path
                  fill="#A17BF9"
                  stroke="#632FD9"
                  strokeWidth={2}
                  d="M181.035 35.793c-.053 9.68-8.291 17.553-18.489 17.498-10.199-.056-18.35-8.018-18.298-17.698.053-9.68 8.291-17.553 18.489-17.497 10.199.055 18.351 8.018 18.298 17.697Z"
                />
                <mask id="b" fill="#fff">
                  <path
                    fillRule="evenodd"
                    d="M182.032 35.799a38.9 38.9 0 0 0 .005-.343c.056-10.271-8.582-18.645-19.292-18.703-10.711-.058-19.439 8.22-19.495 18.492-.001.114 0 .229.001.343.246-10.112 8.899-18.207 19.49-18.15 10.591.058 19.155 8.247 19.291 18.36Z"
                    clipRule="evenodd"
                  />
                </mask>
                <path
                  fill="#A17BF9"
                  fillRule="evenodd"
                  d="M182.032 35.799a38.9 38.9 0 0 0 .005-.343c.056-10.271-8.582-18.645-19.292-18.703-10.711-.058-19.439 8.22-19.495 18.492-.001.114 0 .229.001.343.246-10.112 8.899-18.207 19.49-18.15 10.591.058 19.155 8.247 19.291 18.36Z"
                  clipRule="evenodd"
                />
                <path
                  fill="#632FD9"
                  d="m182.032 35.799-5 .067 9.998.054-4.998-.121Zm-38.781-.211-4.999.067 9.998.054-4.999-.121Zm33.786-.16-.004.25 9.997.242c.004-.145.006-.29.007-.437l-10-.054Zm-14.32-13.675c8.149.044 14.36 6.362 14.32 13.676l10 .054c.072-13.228-10.993-23.658-24.265-23.73l-.055 10ZM148.25 35.272c.04-7.314 6.319-13.563 14.467-13.519l.055-10c-13.273-.072-24.45 10.237-24.522 23.465l10 .054Zm.001.249-.001-.249-10-.054c-.001.145 0 .291.002.437l9.999-.134Zm-.001.188c.175-7.203 6.408-13.314 14.464-13.27l.054-10c-13.127-.072-24.199 10.006-24.515 23.027l9.997.243Zm14.464-13.27c8.055.044 14.222 6.222 14.318 13.427l9.999-.134c-.174-13.024-11.136-23.222-24.263-23.293l-.054 10Z"
                  mask="url(#b)"
                />
              </g>
              <rect
                width={134.978}
                height={44.547}
                x={-3.929}
                y={-1.407}
                fill="#44B594"
                rx={3.5}
                transform="matrix(.97147 -.23715 .60003 .79997 32.732 97.995)"
              />
              <rect
                width={134.978}
                height={44.547}
                x={-3.929}
                y={-1.407}
                stroke="#40AB8C"
                strokeWidth={5}
                rx={3.5}
                transform="matrix(.97147 -.23715 .60003 .79997 32.732 97.995)"
              />
              <rect
                width={134.978}
                height={44.547}
                x={-3.929}
                y={-1.407}
                stroke="#000"
                strokeOpacity={0.2}
                strokeWidth={5}
                rx={3.5}
                transform="matrix(.97147 -.23715 .60003 .79997 32.732 97.995)"
              />
              <ellipse
                cx={14.718}
                cy={14.84}
                fill="#6DFFDD"
                rx={14.718}
                ry={14.84}
                transform="matrix(.90416 -.4272 .87846 .47782 80.075 98.959)"
              />
              <ellipse
                cx={14.718}
                cy={14.84}
                fill="#000"
                fillOpacity={0.1}
                rx={14.718}
                ry={14.84}
                transform="matrix(.90416 -.4272 .87846 .47782 80.075 98.959)"
              />
              <rect
                width={134.978}
                height={44.547}
                x={-3.929}
                y={-1.407}
                fill="#44B594"
                rx={3.5}
                transform="matrix(.97147 -.23715 .60003 .79997 32.732 87.534)"
              />
              <rect
                width={134.978}
                height={44.547}
                x={-3.929}
                y={-1.407}
                stroke="#40AB8C"
                strokeWidth={5}
                rx={3.5}
                transform="matrix(.97147 -.23715 .60003 .79997 32.732 87.534)"
              />
              <rect
                width={134.978}
                height={44.547}
                x={-3.929}
                y={-1.407}
                stroke="#000"
                strokeOpacity={0.2}
                strokeWidth={5}
                rx={3.5}
                transform="matrix(.97147 -.23715 .60003 .79997 32.732 87.534)"
              />
              <ellipse
                cx={14.718}
                cy={14.84}
                fill="#6DFFDD"
                rx={14.718}
                ry={14.84}
                transform="matrix(.90416 -.4272 .87846 .47782 80.075 88.498)"
              />
              <ellipse
                cx={14.718}
                cy={14.84}
                fill="#000"
                fillOpacity={0.1}
                rx={14.718}
                ry={14.84}
                transform="matrix(.90416 -.4272 .87846 .47782 80.075 88.498)"
              />
              <rect
                width={134.978}
                height={44.547}
                x={-3.929}
                y={-1.407}
                fill="#44B594"
                rx={3.5}
                transform="matrix(.97147 -.23715 .60003 .79997 32.732 77.072)"
              />
              <rect
                width={134.978}
                height={44.547}
                x={-3.929}
                y={-1.407}
                stroke="#40AB8C"
                strokeWidth={5}
                rx={3.5}
                transform="matrix(.97147 -.23715 .60003 .79997 32.732 77.072)"
              />
              <rect
                width={134.978}
                height={44.547}
                x={-3.929}
                y={-1.407}
                stroke="#000"
                strokeOpacity={0.2}
                strokeWidth={5}
                rx={3.5}
                transform="matrix(.97147 -.23715 .60003 .79997 32.732 77.072)"
              />
              <ellipse
                cx={14.718}
                cy={14.84}
                fill="#6DFFDD"
                rx={14.718}
                ry={14.84}
                transform="matrix(.90416 -.4272 .87846 .47782 80.075 78.036)"
              />
              <ellipse
                cx={14.718}
                cy={14.84}
                fill="#000"
                fillOpacity={0.1}
                rx={14.718}
                ry={14.84}
                transform="matrix(.90416 -.4272 .87846 .47782 80.075 78.036)"
              />
              <rect
                width={134.978}
                height={44.547}
                x={-3.929}
                y={-1.407}
                fill="#44B594"
                rx={3.5}
                transform="matrix(.97147 -.23715 .60003 .79997 32.732 66.611)"
              />
              <rect
                width={134.978}
                height={44.547}
                x={-3.929}
                y={-1.407}
                stroke="#40AB8C"
                strokeWidth={5}
                rx={3.5}
                transform="matrix(.97147 -.23715 .60003 .79997 32.732 66.611)"
              />
              <rect
                width={134.978}
                height={44.547}
                x={-3.929}
                y={-1.407}
                stroke="#000"
                strokeOpacity={0.2}
                strokeWidth={5}
                rx={3.5}
                transform="matrix(.97147 -.23715 .60003 .79997 32.732 66.611)"
              />
              <ellipse
                cx={14.718}
                cy={14.84}
                fill="#6DFFDD"
                rx={14.718}
                ry={14.84}
                transform="matrix(.90416 -.4272 .87846 .47782 80.075 67.575)"
              />
              <ellipse
                cx={14.718}
                cy={14.84}
                fill="#000"
                fillOpacity={0.1}
                rx={14.718}
                ry={14.84}
                transform="matrix(.90416 -.4272 .87846 .47782 80.075 67.575)"
              />
              <g filter="url(#c)">
                <ellipse
                  cx={47.206}
                  cy={137.375}
                  fill="#632FD9"
                  rx={22.968}
                  ry={22.026}
                  transform="rotate(16.217 47.206 137.375)"
                />
                <ellipse
                  cx={47.732}
                  cy={135.564}
                  fill="#A17BF9"
                  rx={22.968}
                  ry={22.026}
                  transform="rotate(16.217 47.732 135.564)"
                />
                <path
                  fill="#FAFAFA"
                  fillOpacity={0.4}
                  fillRule="evenodd"
                  d="M30.474 120.339c5.99-5.865 14.795-8.43 23.31-5.954 9.06 2.635 15.335 10.262 16.796 19.106-5.99 5.866-14.795 8.431-23.31 5.954-9.06-2.634-15.336-10.261-16.796-19.106Z"
                  clipRule="evenodd"
                />
                <path
                  fill="#A17BF9"
                  stroke="#632FD9"
                  strokeWidth={2}
                  d="M65.394 140.701c-2.703 9.295-12.784 14.609-22.576 11.76-9.793-2.848-15.45-12.739-12.747-22.034 2.703-9.295 12.783-14.609 22.576-11.761 9.793 2.849 15.45 12.74 12.747 22.035Z"
                />
                <mask id="d" fill="#fff">
                  <path
                    fillRule="evenodd"
                    d="M66.351 140.979c.034-.109.067-.218.099-.328 2.868-9.862-3.144-20.283-13.428-23.274-10.285-2.991-20.947 2.579-23.816 12.442l-.093.33c3.008-9.658 13.547-15.071 23.717-12.113 10.17 2.957 16.162 13.179 13.521 22.943Z"
                    clipRule="evenodd"
                  />
                </mask>
                <path
                  fill="#A17BF9"
                  fillRule="evenodd"
                  d="M66.351 140.979c.034-.109.067-.218.099-.328 2.868-9.862-3.144-20.283-13.428-23.274-10.285-2.991-20.947 2.579-23.816 12.442l-.093.33c3.008-9.658 13.547-15.071 23.717-12.113 10.17 2.957 16.162 13.179 13.521 22.943Z"
                  clipRule="evenodd"
                />
                <path
                  fill="#632FD9"
                  d="m66.351 140.979-4.826-1.305 9.6 2.792-4.774-1.487Zm-37.238-10.83-4.826-1.306 9.6 2.792-4.774-1.486Zm32.536 9.106c-.023.079-.047.159-.072.238l9.548 2.973c.043-.139.085-.278.126-.419l-9.602-2.792Zm-10.023-17.077c7.824 2.276 12.066 10.053 10.023 17.077l9.602 2.792c3.694-12.701-4.088-25.764-16.833-29.471l-2.792 9.602Zm-17.619 9.037c2.043-7.023 9.794-11.313 17.619-9.037l2.792-9.602c-12.744-3.707-26.319 3.144-30.013 15.846l9.602 2.793Zm-.067.239c.021-.079.044-.159.067-.239l-9.602-2.793c-.04.14-.08.281-.118.421l9.653 2.611Zm-.053.181c2.142-6.879 9.812-11.048 17.547-8.798l2.793-9.603c-12.605-3.666-26.015 2.992-29.887 15.428l9.547 2.973Zm17.547-8.798c7.735 2.249 11.972 9.882 10.09 16.837l9.654 2.611c3.4-12.573-4.346-25.384-16.951-29.051l-2.793 9.603Z"
                  mask="url(#d)"
                />
              </g>
              <defs>
                <filter
                  id="a"
                  width={94.186}
                  height={94.186}
                  x={115.543}
                  y={0.543}
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy={11} />
                  <feGaussianBlur stdDeviation={12} />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix values="0 0 0 0 0.0791667 0 0 0 0 0.0791667 0 0 0 0 0.0791667 0 0 0 0.25 0" />
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2945_8568"
                  />
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2945_8568"
                    result="shape"
                  />
                </filter>
                <filter
                  id="c"
                  width={104.938}
                  height={104.938}
                  x={-5}
                  y={95}
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy={11} />
                  <feGaussianBlur stdDeviation={12} />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix values="0 0 0 0 0.0791667 0 0 0 0 0.0791667 0 0 0 0 0.0791667 0 0 0 0.25 0" />
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2945_8568"
                  />
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2945_8568"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={137}
              height={178}
              fill="none"
            >
              <path
                stroke="url(#a)"
                d="M56.544 32.348c-13.18-6-27.459-12.065-32.95-14.348l-6.59 2.609L53.66 32.348l2.883.652"
              />
              <path
                fill="#63B13E"
                d="M43.391 1c3.707 3.26 18.169 18.684 46.176 49.989L95.7 63.935 84.99 68.5 74.695 52.196l-2.06-4.566-41.6 2.283 2.06-9.783 35.421 2.61-2.059-1.631-46.954-7.174 6.178-5.87 36.245 5.218L38.86 21.87l7.002-2.61L33.094 8.5 43.391 1Z"
              />
              <path
                stroke="url(#b)"
                d="M89.567 50.989C61.56 19.685 47.097 4.26 43.391 1L33.094 8.5l12.768 10.76-7.002 2.61 23.065 11.413-36.245-5.218-6.178 5.87 46.954 7.174 2.06 1.63-35.422-2.609-2.06 9.783 41.6-2.283 2.06 4.566L84.99 68.5l10.71-4.565L89.52 50.89"
              />
              <path
                stroke="url(#c)"
                d="M96 34.348c10.435-6 21.739-12.065 26.087-14.348l5.217 2.609-29.021 11.739L96 35"
              />
              <path
                fill="#63B13E"
                d="M106.413 3c-2.935 3.26-14.384 18.684-36.558 49.989L65 65.935l8.478 4.565 8.152-16.304 1.63-4.566 32.936 2.283-1.631-9.783-28.043 2.61 1.63-1.631 37.174-7.174-4.891-5.87-28.696 5.218L110 23.87l-5.543-2.61 10.108-10.76-8.152-7.5Z"
              />
              <path
                stroke="url(#d)"
                d="M69.855 52.989C92.029 21.685 103.478 6.26 106.413 3l8.152 7.5-10.108 10.76L110 23.87 91.74 35.283l28.695-5.218 4.891 5.87-37.174 7.174-1.63 1.63 28.043-2.609 1.631 9.783-32.935-2.283-1.63 4.566L73.477 70.5 65 65.935l4.891-13.044"
              />
              <circle cx={78.5} cy={51.5} r={8.5} fill="#F94F46" />
              <circle cx={74.5} cy={47.5} r={1.5} fill="#FF746C" />
              <g filter="url(#e)">
                <circle cx={92.5} cy={50.505} r={8.5} fill="#FF7428" />
              </g>
              <circle cx={96.5} cy={46.5} r={1.5} fill="#FF8D4F" />
              <path
                fill="url(#f)"
                d="M86.683 41.127h2v4h-2z"
                transform="rotate(-34.093 86.683 41.127)"
              />
              <path
                fill="url(#g)"
                d="M81.246 40h2v4h-2z"
                transform="rotate(18.147 81.246 40)"
              />
              <g filter="url(#h)">
                <circle cx={106.5} cy={49.499} r={8.5} fill="#FF7428" />
              </g>
              <circle cx={110.5} cy={45.494} r={1.5} fill="#FF8D4F" />
              <path
                fill="url(#i)"
                d="M100.683 40.121h2v4h-2z"
                transform="rotate(-34.093 100.683 40.121)"
              />
              <ellipse
                cx={18.952}
                cy={56.055}
                fill="#EFB940"
                rx={18.952}
                ry={56.055}
                transform="matrix(.93026 -.3669 .24246 .97016 25 17.906)"
              />
              <ellipse
                cx={48.081}
                cy={29.099}
                fill="#D9D9D9"
                rx={6}
                ry={1}
                transform="rotate(-10.733 48.081 29.1)"
              />
              <ellipse
                cx={48.935}
                cy={33.637}
                fill="#D9D9D9"
                rx={11.757}
                ry={1.5}
                transform="rotate(-10.733 48.935 33.637)"
              />
              <ellipse
                cx={50.081}
                cy={39.099}
                fill="#D9D9D9"
                rx={6}
                ry={1}
                transform="rotate(-10.733 50.081 39.1)"
              />
              <g filter="url(#j)">
                <ellipse
                  cx={47.968}
                  cy={53.075}
                  fill="#CAA986"
                  rx={10}
                  ry={15}
                  transform="rotate(-31.176 47.968 53.075)"
                />
              </g>
              <ellipse
                cx={47.441}
                cy={43.751}
                fill="#E6C199"
                rx={1.875}
                ry={2.25}
                transform="rotate(-31.176 47.44 43.751)"
              />
              <g filter="url(#k)">
                <ellipse
                  cx={31.697}
                  cy={56.607}
                  fill="#CAA986"
                  rx={10}
                  ry={15}
                  transform="rotate(-31.176 31.697 56.607)"
                />
              </g>
              <ellipse
                cx={31.17}
                cy={47.284}
                fill="#E6C199"
                rx={1.875}
                ry={2.25}
                transform="rotate(-31.176 31.17 47.284)"
              />
              <path
                fill="#7A43F7"
                d="M18.147 60.292a3 3 0 0 1 2.66-2.527l102.644-10.454a3 3 0 0 1 3.294 2.745l9.995 124.704a3 3 0 0 1-2.99 3.24H3.498a3 3 0 0 1-2.965-3.457l17.614-114.25Z"
              />
              <path
                stroke="#B493FF"
                d="M22.662 66.215a1 1 0 0 1 .885-.846l92.699-9.711a1 1 0 0 1 1.101.917l9.029 115.847a1.001 1.001 0 0 1-.997 1.078H7.742a1 1 0 0 1-.99-1.148l15.91-106.137Z"
              />
              <defs>
                <linearGradient
                  id="a"
                  x1={36.774}
                  x2={38.084}
                  y1={18}
                  y2={40.046}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#52FF00" />
                  <stop offset={1} stopColor="#00BE85" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="b"
                  x1={57.601}
                  x2={57.601}
                  y1={1}
                  y2={68.5}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00BE85" />
                  <stop offset={1} stopColor="#00BE85" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="c"
                  x1={111.652}
                  x2={110}
                  y1={20}
                  y2={42}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#52FF00" />
                  <stop offset={1} stopColor="#00BE85" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="d"
                  x1={95.163}
                  x2={95.163}
                  y1={3}
                  y2={70.5}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00BE85" />
                  <stop offset={1} stopColor="#00BE85" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="f"
                  x1={87.683}
                  x2={87.941}
                  y1={41.127}
                  y2={47.863}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0.418} />
                  <stop offset={1} stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="g"
                  x1={82.246}
                  x2={82.504}
                  y1={40}
                  y2={46.736}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0.418} />
                  <stop offset={1} stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="i"
                  x1={101.683}
                  x2={101.94}
                  y1={40.121}
                  y2={46.857}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0.418} />
                  <stop offset={1} stopOpacity={0} />
                </linearGradient>
                <filter
                  id="e"
                  width={17}
                  height={21}
                  x={84}
                  y={42.005}
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy={4} />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2945_8749"
                  />
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2945_8749"
                    result="shape"
                  />
                </filter>
                <filter
                  id="h"
                  width={17}
                  height={21}
                  x={98}
                  y={40.999}
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy={4} />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2945_8749"
                  />
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2945_8749"
                    result="shape"
                  />
                </filter>
                <filter
                  id="j"
                  width={24.108}
                  height={28.684}
                  x={35.414}
                  y={39.233}
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dx={-1} dy={1} />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix values="0 0 0 0 0.229167 0 0 0 0 0.120219 0 0 0 0 0 0 0 0 1 0" />
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2945_8749"
                  />
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2945_8749"
                    result="shape"
                  />
                </filter>
                <filter
                  id="k"
                  width={24.108}
                  height={28.684}
                  x={19.143}
                  y={42.766}
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dx={-1} dy={1} />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix values="0 0 0 0 0.229167 0 0 0 0 0.120219 0 0 0 0 0 0 0 0 1 0" />
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2945_8749"
                  />
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2945_8749"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={204}
              height={170}
              fill="none"
            >
              <path
                stroke="#A17BF9"
                strokeWidth={5}
                d="M79 53V13c0-5.523 4.477-10 10-10h20c5.523 0 10 4.477 10 10v15.667"
              />
              <rect
                width={91.615}
                height={64.286}
                x={49}
                y={39.528}
                fill="#53D0AC"
                rx={5}
              />
              <rect
                width={91.615}
                height={64.286}
                x={57.385}
                y={48.224}
                fill="#3C9B7F"
                rx={5}
              />
              <rect
                width={72.36}
                height={44.099}
                x={57.385}
                y={48.224}
                fill="#A17BF9"
                rx={5}
              />
              <g filter="url(#a)">
                <path
                  fill="#fff"
                  d="M87.126 65.11C86.05 61.008 89.144 57 93.383 57c3.991 0 7.03 3.578 6.385 7.516L97.012 81.32a2.85 2.85 0 0 1-5.57.261l-4.316-16.47Z"
                />
              </g>
              <g filter="url(#b)">
                <ellipse
                  cx={156.91}
                  cy={42.539}
                  fill="#632FD9"
                  rx={22.968}
                  ry={22.026}
                  transform="rotate(-16.836 156.91 42.539)"
                />
                <ellipse
                  cx={156.363}
                  cy={40.734}
                  fill="#A17BF9"
                  rx={22.968}
                  ry={22.026}
                  transform="rotate(-16.836 156.363 40.734)"
                />
                <path
                  fill="#FAFAFA"
                  fillOpacity={0.4}
                  fillRule="evenodd"
                  d="M133.594 37.387c1.822-8.184 7.803-15.136 16.291-17.705 9.03-2.732 18.45.238 24.498 6.854-1.821 8.183-7.802 15.136-16.291 17.704-9.03 2.733-18.449-.237-24.498-6.853Z"
                  clipRule="evenodd"
                />
                <path
                  fill="#A17BF9"
                  stroke="#632FD9"
                  strokeWidth={2}
                  d="M173.969 35.407c2.803 9.265-2.748 19.217-12.509 22.17-9.761 2.955-19.898-2.25-22.702-11.515-2.803-9.265 2.747-19.217 12.509-22.171 9.761-2.954 19.898 2.251 22.702 11.516Z"
                />
                <mask id="c" fill="#fff">
                  <path
                    fillRule="evenodd"
                    d="M174.923 35.118c-.031-.11-.063-.22-.097-.329-2.974-9.83-13.697-15.286-23.948-12.183-10.252 3.102-16.151 13.586-13.176 23.417.033.11.067.219.102.327-2.747-9.734 3.135-20.02 13.272-23.088 10.138-3.068 20.735 2.232 23.847 11.856Z"
                    clipRule="evenodd"
                  />
                </mask>
                <path
                  fill="#A17BF9"
                  fillRule="evenodd"
                  d="M174.923 35.118c-.031-.11-.063-.22-.097-.329-2.974-9.83-13.697-15.286-23.948-12.183-10.252 3.102-16.151 13.586-13.176 23.417.033.11.067.219.102.327-2.747-9.734 3.135-20.02 13.272-23.088 10.138-3.068 20.735 2.232 23.847 11.856Z"
                  clipRule="evenodd"
                />
                <path
                  fill="#632FD9"
                  d="m174.923 35.118-4.758 1.538 9.57-2.895-4.812 1.357ZM137.804 46.35l-4.758 1.538 9.57-2.895-4.812 1.357Zm32.237-10.113.07.24 9.624-2.716-.123-.42-9.571 2.896Zm-17.715-8.846c7.799-2.36 15.596 1.846 17.715 8.846l9.571-2.896c-3.831-12.66-17.479-19.365-30.183-15.521l2.897 9.571Zm-9.839 17.184c-2.118-7 2.039-14.823 9.839-17.184l-2.897-9.571c-12.703 3.844-20.344 16.99-16.513 29.651l9.571-2.896Zm.075.237a9.35 9.35 0 0 1-.075-.237l-9.571 2.896c.042.14.086.279.13.417l9.516-3.076Zm.054.18c-1.956-6.934 2.198-14.611 9.908-16.944l-2.896-9.572c-12.565 3.802-20.173 16.697-16.636 29.232l9.624-2.715Zm9.908-16.944c7.711-2.333 15.425 1.753 17.641 8.608l9.515-3.076c-4.006-12.393-17.487-18.906-30.052-15.104l2.896 9.572Z"
                  mask="url(#c)"
                />
              </g>
              <g filter="url(#d)">
                <ellipse
                  cx={47.26}
                  cy={112.501}
                  fill="#632FD9"
                  rx={22.968}
                  ry={22.026}
                  transform="rotate(23.526 47.26 112.501)"
                />
                <ellipse
                  cx={48.013}
                  cy={110.772}
                  fill="#A17BF9"
                  rx={22.968}
                  ry={22.026}
                  transform="rotate(23.526 48.013 110.772)"
                />
                <path
                  fill="#FAFAFA"
                  fillOpacity={0.4}
                  fillRule="evenodd"
                  d="M32.831 93.477c6.688-5.057 15.748-6.48 23.88-2.94 8.65 3.765 13.904 12.128 14.228 21.087-6.688 5.056-15.748 6.48-23.879 2.94-8.65-3.766-13.905-12.129-14.229-21.087Z"
                  clipRule="evenodd"
                />
                <path
                  fill="#A17BF9"
                  stroke="#632FD9"
                  strokeWidth={2}
                  d="M64.878 118.115c-3.864 8.875-14.538 12.863-23.89 8.792-9.35-4.07-13.703-14.601-9.84-23.477 3.864-8.875 14.539-12.863 23.89-8.792 9.35 4.07 13.704 14.601 9.84 23.477Z"
                />
                <mask id="e" fill="#fff">
                  <path
                    fillRule="evenodd"
                    d="m65.792 118.512.14-.313c4.1-9.417-.538-20.517-10.359-24.793-9.82-4.275-21.105-.107-25.205 9.311l-.134.315c4.212-9.196 15.355-13.225 25.066-8.997 9.71 4.228 14.354 15.129 10.492 24.477Z"
                    clipRule="evenodd"
                  />
                </mask>
                <path
                  fill="#A17BF9"
                  fillRule="evenodd"
                  d="m65.792 118.512.14-.313c4.1-9.417-.538-20.517-10.359-24.793-9.82-4.275-21.105-.107-25.205 9.311l-.134.315c4.212-9.196 15.355-13.225 25.066-8.997 9.71 4.228 14.354 15.129 10.492 24.477Z"
                  clipRule="evenodd"
                />
                <path
                  fill="#632FD9"
                  d="m65.792 118.512-4.621-1.909 9.167 3.991-4.546-2.082Zm-35.558-15.48-4.62-1.909 9.166 3.991-4.546-2.082Zm31.113 13.171c-.033.077-.067.152-.101.228l9.092 4.163c.06-.132.12-.265.178-.399l-9.169-3.992Zm-7.77-18.212c7.472 3.252 10.69 11.506 7.77 18.212l9.169 3.992c5.28-12.128-.777-26.075-12.947-31.373l-3.991 9.169Zm-18.624 6.722c2.92-6.707 11.153-9.975 18.625-6.722l3.991-9.17c-12.17-5.297-26.505-.228-31.785 11.9l9.169 3.992Zm-.097.229c.031-.077.063-.153.097-.229l-9.17-3.992a24.67 24.67 0 0 0-.17.402l9.243 3.819Zm-.076.172c3-6.55 11.138-9.71 18.524-6.495l3.991-9.168c-12.035-5.24-26.184-.342-31.607 11.5l9.092 4.163Zm18.524-6.495c7.386 3.216 10.617 11.325 7.867 17.984l9.242 3.818c4.973-12.037-1.081-25.73-13.117-30.97l-3.992 9.168Z"
                  mask="url(#e)"
                />
              </g>
              <defs>
                <filter
                  id="a"
                  width={44.944}
                  height={58.708}
                  x={72.911}
                  y={48}
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dx={2} dy={7} />
                  <feGaussianBlur stdDeviation={8} />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2945_8644"
                  />
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2945_8644"
                    result="shape"
                  />
                </filter>
                <filter
                  id="b"
                  width={105.273}
                  height={105.272}
                  x={104}
                  y={0}
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy={11} />
                  <feGaussianBlur stdDeviation={12} />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix values="0 0 0 0 0.0791667 0 0 0 0 0.0791667 0 0 0 0 0.0791667 0 0 0 0.25 0" />
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2945_8644"
                  />
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2945_8644"
                    result="shape"
                  />
                </filter>
                <filter
                  id="d"
                  width={108.455}
                  height={108.455}
                  x={-6.591}
                  y={68.409}
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy={11} />
                  <feGaussianBlur stdDeviation={12} />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix values="0 0 0 0 0.0791667 0 0 0 0 0.0791667 0 0 0 0 0.0791667 0 0 0 0.25 0" />
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2945_8644"
                  />
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2945_8644"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
