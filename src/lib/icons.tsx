import React from 'react'
import {StyleProp, TextStyle, ViewStyle} from 'react-native'
import Svg, {Path, Rect, Line, Ellipse} from 'react-native-svg'

export function GridIcon({
  style,
  solid,
}: {
  style?: StyleProp<ViewStyle>
  solid?: boolean
}) {
  const DIM = 4
  const ARC = 2
  return (
    <Svg width="24" height="24" style={style}>
      <Path
        d={`M4,1 h${DIM} a${ARC},${ARC} 0 0 1 ${ARC},${ARC} v${DIM} a${ARC},${ARC} 0 0 1 -${ARC},${ARC} h-${DIM} a${ARC},${ARC} 0 0 1 -${ARC},-${ARC} v-${DIM} a${ARC},${ARC} 0 0 1 ${ARC},-${ARC} z`}
        strokeWidth={2}
        stroke="#000"
        fill={solid ? '#000' : undefined}
      />
      <Path
        d={`M16,1 h${DIM} a${ARC},${ARC} 0 0 1 ${ARC},${ARC} v${DIM} a${ARC},${ARC} 0 0 1 -${ARC},${ARC} h-${DIM} a${ARC},${ARC} 0 0 1 -${ARC},-${ARC} v-${DIM} a${ARC},${ARC} 0 0 1 ${ARC},-${ARC} z`}
        strokeWidth={2}
        stroke="#000"
        fill={solid ? '#000' : undefined}
      />
      <Path
        d={`M4,13 h${DIM} a${ARC},${ARC} 0 0 1 ${ARC},${ARC} v${DIM} a${ARC},${ARC} 0 0 1 -${ARC},${ARC} h-${DIM} a${ARC},${ARC} 0 0 1 -${ARC},-${ARC} v-${DIM} a${ARC},${ARC} 0 0 1 ${ARC},-${ARC} z`}
        strokeWidth={2}
        stroke="#000"
        fill={solid ? '#000' : undefined}
      />
      <Path
        d={`M16,13 h${DIM} a${ARC},${ARC} 0 0 1 ${ARC},${ARC} v${DIM} a${ARC},${ARC} 0 0 1 -${ARC},${ARC} h-${DIM} a${ARC},${ARC} 0 0 1 -${ARC},-${ARC} v-${DIM} a${ARC},${ARC} 0 0 1 ${ARC},-${ARC} z`}
        strokeWidth={2}
        stroke="#000"
        fill={solid ? '#000' : undefined}
      />
    </Svg>
  )
}
export function GridIconSolid({style}: {style?: StyleProp<ViewStyle>}) {
  return <GridIcon style={style} solid />
}

export function HomeIcon({
  style,
  size,
  strokeWidth = 4,
}: {
  style?: StyleProp<ViewStyle>
  size?: string | number
  strokeWidth?: number
}) {
  return (
    <Svg
      viewBox="0 0 48 48"
      width={size || 24}
      height={size || 24}
      stroke="currentColor"
      fill="none"
      style={style}>
      <Path
        strokeWidth={strokeWidth}
        d="M 23.951 2 C 23.631 2.011 23.323 2.124 23.072 2.322 L 8.859 13.52 C 7.055 14.941 6 17.114 6 19.41 L 6 38.5 C 6 39.864 7.136 41 8.5 41 L 18.5 41 C 19.864 41 21 39.864 21 38.5 L 21 28.5 C 21 28.205 21.205 28 21.5 28 L 26.5 28 C 26.795 28 27 28.205 27 28.5 L 27 38.5 C 27 39.864 28.136 41 29.5 41 L 39.5 41 C 40.864 41 42 39.864 42 38.5 L 42 19.41 C 42 17.114 40.945 14.941 39.141 13.52 L 24.928 2.322 C 24.65 2.103 24.304 1.989 23.951 2 Z"
      />
    </Svg>
  )
}

export function HomeIconSolid({
  style,
  size,
  strokeWidth = 4,
  fillOpacity = 1,
}: {
  style?: StyleProp<ViewStyle>
  size?: string | number
  strokeWidth?: number
  fillOpacity?: number
}) {
  return (
    <Svg
      viewBox="0 0 48 48"
      width={size || 24}
      height={size || 24}
      stroke="currentColor"
      style={style}>
      <Path
        fill="currentColor"
        stroke="none"
        opacity={fillOpacity}
        d="M 23.951 2 C 23.631 2.011 23.323 2.124 23.072 2.322 L 8.859 13.52 C 7.055 14.941 6 17.114 6 19.41 L 6 38.5 C 6 39.864 7.136 41 8.5 41 L 18.5 41 C 19.864 41 21 39.864 21 38.5 L 21 28.5 C 21 28.205 21.205 28 21.5 28 L 26.5 28 C 26.795 28 27 28.205 27 28.5 L 27 38.5 C 27 39.864 28.136 41 29.5 41 L 39.5 41 C 40.864 41 42 39.864 42 38.5 L 42 19.41 C 42 17.114 40.945 14.941 39.141 13.52 L 24.928 2.322 C 24.65 2.103 24.304 1.989 23.951 2 Z"
      />
      <Path
        strokeWidth={strokeWidth}
        d="M 23.951 2 C 23.631 2.011 23.323 2.124 23.072 2.322 L 8.859 13.52 C 7.055 14.941 6 17.114 6 19.41 L 6 38.5 C 6 39.864 7.136 41 8.5 41 L 18.5 41 C 19.864 41 21 39.864 21 38.5 L 21 28.5 C 21 28.205 21.205 28 21.5 28 L 26.5 28 C 26.795 28 27 28.205 27 28.5 L 27 38.5 C 27 39.864 28.136 41 29.5 41 L 39.5 41 C 40.864 41 42 39.864 42 38.5 L 42 19.41 C 42 17.114 40.945 14.941 39.141 13.52 L 24.928 2.322 C 24.65 2.103 24.304 1.989 23.951 2 Z"
      />
    </Svg>
  )
}

// Copyright (c) 2020 Refactoring UI Inc.
// https://github.com/tailwindlabs/heroicons/blob/master/LICENSE
export function MagnifyingGlassIcon({
  style,
  size,
  strokeWidth = 2,
}: {
  style?: StyleProp<ViewStyle>
  size?: string | number
  strokeWidth?: number
}) {
  return (
    <Svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke="currentColor"
      width={size || 24}
      height={size || 24}
      style={style}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </Svg>
  )
}

export function MagnifyingGlassIcon2({
  style,
  size,
  strokeWidth = 2,
}: {
  style?: StyleProp<ViewStyle>
  size?: string | number
  strokeWidth?: number
}) {
  return (
    <Svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke="currentColor"
      width={size || 24}
      height={size || 24}
      style={style}>
      <Ellipse cx="12" cy="11" rx="9" ry="9" />
      <Line x1="19" y1="17.3" x2="23.5" y2="21" strokeLinecap="round" />
    </Svg>
  )
}

export function MagnifyingGlassIcon2Solid({
  style,
  size,
  strokeWidth = 2,
  fillOpacity = 1,
}: {
  style?: StyleProp<ViewStyle>
  size?: string | number
  strokeWidth?: number
  fillOpacity?: number
}) {
  return (
    <Svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke="currentColor"
      width={size || 24}
      height={size || 24}
      style={style}>
      <Ellipse
        cx="12"
        cy="11"
        rx="7"
        ry="7"
        stroke="none"
        fill="currentColor"
        opacity={fillOpacity}
      />
      <Ellipse cx="12" cy="11" rx="9" ry="9" />
      <Line x1="19" y1="17.3" x2="23.5" y2="21" strokeLinecap="round" />
    </Svg>
  )
}

// https://github.com/Remix-Design/RemixIcon/blob/master/License
export function BellIcon({
  style,
  size,
  strokeWidth = 1.5,
}: {
  style?: StyleProp<ViewStyle>
  size?: string | number
  strokeWidth?: number
}) {
  return (
    <Svg
      fill="none"
      viewBox="0 0 24 24"
      width={size || 24}
      height={size || 24}
      strokeWidth={strokeWidth}
      stroke="currentColor"
      style={style}>
      <Path d="M 11.642 2 H 12.442 A 8.6 8.55 0 0 1 21.042 10.55 V 18.1 A 1 1 0 0 1 20.042 19.1 H 4.042 A 1 1 0 0 1 3.042 18.1 V 10.55 A 8.6 8.55 0 0 1 11.642 2 Z" />
      <Line x1="9" y1="22" x2="15" y2="22" />
    </Svg>
  )
}

// https://github.com/Remix-Design/RemixIcon/blob/master/License
export function BellIconSolid({
  style,
  size,
  strokeWidth = 1.5,
  fillOpacity = 1,
}: {
  style?: StyleProp<ViewStyle>
  size?: string | number
  strokeWidth?: number
  fillOpacity?: number
}) {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={size || 24}
      height={size || 24}
      strokeWidth={strokeWidth}
      stroke="currentColor"
      style={style}>
      <Path
        d="M 11.642 2 H 12.442 A 8.6 8.55 0 0 1 21.042 10.55 V 18.1 A 1 1 0 0 1 20.042 19.1 H 4.042 A 1 1 0 0 1 3.042 18.1 V 10.55 A 8.6 8.55 0 0 1 11.642 2 Z"
        fill="currentColor"
        stroke="none"
        opacity={fillOpacity}
      />
      <Path d="M 11.642 2 H 12.442 A 8.6 8.55 0 0 1 21.042 10.55 V 18.1 A 1 1 0 0 1 20.042 19.1 H 4.042 A 1 1 0 0 1 3.042 18.1 V 10.55 A 8.6 8.55 0 0 1 11.642 2 Z" />
      <Line x1="9" y1="22" x2="15" y2="22" />
    </Svg>
  )
}

export function CogIcon({
  style,
  size,
  strokeWidth = 1.5,
}: {
  style?: StyleProp<ViewStyle>
  size?: string | number
  strokeWidth: number
}) {
  return (
    <Svg
      fill="none"
      viewBox="0 0 24 24"
      width={size || 32}
      height={size || 32}
      strokeWidth={strokeWidth}
      stroke="currentColor"
      style={style}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
      />
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </Svg>
  )
}

// Copyright (c) 2020 Refactoring UI Inc.
// https://github.com/tailwindlabs/heroicons/blob/master/LICENSE
export function UserIcon({
  style,
  size,
  strokeWidth = 1.5,
}: {
  style?: StyleProp<ViewStyle>
  size?: string | number
  strokeWidth?: number
}) {
  return (
    <Svg
      fill="none"
      viewBox="0 0 24 24"
      width={size || 32}
      height={size || 32}
      strokeWidth={strokeWidth}
      stroke="currentColor"
      style={style}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </Svg>
  )
}

// Copyright (c) 2020 Refactoring UI Inc.
// https://github.com/tailwindlabs/heroicons/blob/master/LICENSE
export function UserGroupIcon({
  style,
  size,
}: {
  style?: StyleProp<ViewStyle>
  size?: string | number
}) {
  return (
    <Svg
      fill="none"
      viewBox="0 0 24 24"
      width={size || 32}
      height={size || 32}
      strokeWidth={2}
      stroke="currentColor"
      style={style}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
      />
    </Svg>
  )
}

export function RepostIcon({
  style,
  size = 24,
  strokeWidth = 1.5,
}: {
  style?: StyleProp<ViewStyle>
  size?: string | number
  strokeWidth: number
}) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} style={style}>
      <Path
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        fill="none"
        d="M 14.437 17.081 L 5.475 17.095 C 4.7 17.095 4.072 16.467 4.072 15.692 L 4.082 5.65 L 1.22 9.854 M 4.082 5.65 L 7.006 9.854 M 9.859 5.65 L 18.625 5.654 C 19.4 5.654 20.028 6.282 20.028 7.057 L 20.031 17.081 L 17.167 12.646 M 20.031 17.081 L 22.866 12.646"
      />
    </Svg>
  )
}

// Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.
export function HeartIcon({
  style,
  size = 24,
  strokeWidth = 1.5,
}: {
  style?: StyleProp<ViewStyle>
  size?: string | number
  strokeWidth: number
}) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} style={style}>
      <Path
        strokeWidth={strokeWidth}
        stroke="currentColor"
        fill="none"
        d="M 3.859 13.537 L 10.918 20.127 C 11.211 20.4 11.598 20.552 12 20.552 C 12.402 20.552 12.789 20.4 13.082 20.127 L 20.141 13.537 C 21.328 12.431 22 10.88 22 9.259 L 22 9.033 C 22 6.302 20.027 3.974 17.336 3.525 C 15.555 3.228 13.742 3.81 12.469 5.084 L 12 5.552 L 11.531 5.084 C 10.258 3.81 8.445 3.228 6.664 3.525 C 3.973 3.974 2 6.302 2 9.033 L 2 9.259 C 2 10.88 2.672 12.431 3.859 13.537 Z"
      />
    </Svg>
  )
}

// Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.
export function HeartIconSolid({
  style,
  size = 24,
}: {
  style?: StyleProp<ViewStyle>
  size?: string | number
}) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} style={style}>
      <Path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={1}
        d="M 3.859 13.537 L 10.918 20.127 C 11.211 20.4 11.598 20.552 12 20.552 C 12.402 20.552 12.789 20.4 13.082 20.127 L 20.141 13.537 C 21.328 12.431 22 10.88 22 9.259 L 22 9.033 C 22 6.302 20.027 3.974 17.336 3.525 C 15.555 3.228 13.742 3.81 12.469 5.084 L 12 5.552 L 11.531 5.084 C 10.258 3.81 8.445 3.228 6.664 3.525 C 3.973 3.974 2 6.302 2 9.033 L 2 9.259 C 2 10.88 2.672 12.431 3.859 13.537 Z"
      />
    </Svg>
  )
}

export function UpIcon({
  style,
  size,
  strokeWidth = 1.3,
}: {
  style?: StyleProp<ViewStyle>
  size?: string | number
  strokeWidth: number
}) {
  return (
    <Svg
      viewBox="0 0 14 14"
      width={size || 24}
      height={size || 24}
      style={style}>
      <Path
        strokeWidth={strokeWidth}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 7 3 L 2 8 L 4.5 8 L 4.5 11.5 L 9.5 11.5 L 9.5 8 L 12 8 L 7 3 Z"
      />
    </Svg>
  )
}

export function UpIconSolid({
  style,
  size,
}: {
  style?: StyleProp<ViewStyle>
  size?: string | number
}) {
  return (
    <Svg
      viewBox="0 0 14 14"
      width={size || 24}
      height={size || 24}
      style={style}>
      <Path
        strokeWidth={1.3}
        stroke="currentColor"
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 7 3 L 2 8 L 4.5 8 L 4.5 11.5 L 9.5 11.5 L 9.5 8 L 12 8 L 7 3 Z"
      />
    </Svg>
  )
}

export function DownIcon({
  style,
  size,
}: {
  style?: StyleProp<ViewStyle>
  size?: string | number
}) {
  return (
    <Svg
      viewBox="0 0 14 14"
      width={size || 24}
      height={size || 24}
      style={style}>
      <Path
        strokeWidth={1.3}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 7 11.5 L 2 6.5 L 4.5 6.5 L 4.5 3 L 9.5 3 L 9.5 6.5 L 12 6.5 L 7 11.5 Z"
      />
    </Svg>
  )
}

export function DownIconSolid({
  style,
  size,
}: {
  style?: StyleProp<ViewStyle>
  size?: string | number
}) {
  return (
    <Svg
      viewBox="0 0 14 14"
      width={size || 24}
      height={size || 24}
      style={style}>
      <Path
        strokeWidth={1.3}
        stroke="currentColor"
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 7 11.5 L 2 6.5 L 4.5 6.5 L 4.5 3 L 9.5 3 L 9.5 6.5 L 12 6.5 L 7 11.5 Z"
      />
    </Svg>
  )
}

// Copyright (c) 2020 Refactoring UI Inc.
// https://github.com/tailwindlabs/heroicons/blob/master/LICENSE
export function CommentBottomArrow({
  style,
  size,
  strokeWidth = 1.3,
}: {
  style?: StyleProp<TextStyle>
  size?: string | number
  strokeWidth?: number
}) {
  let color = 'currentColor'
  if (
    style &&
    typeof style === 'object' &&
    'color' in style &&
    typeof style.color === 'string'
  ) {
    color = style.color
  }
  return (
    <Svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth || 2.5}
      stroke={color}
      width={size || 24}
      height={size || 24}
      style={style}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
      />
    </Svg>
  )
}

export function SquareIcon({
  style,
  size,
  strokeWidth = 1.3,
}: {
  style?: StyleProp<TextStyle>
  size?: string | number
  strokeWidth?: number
}) {
  return (
    <Svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth || 1}
      stroke="currentColor"
      width={size || 24}
      height={size || 24}
      style={style}>
      <Rect x="6" y="6" width="12" height="12" strokeLinejoin="round" />
    </Svg>
  )
}

export function RectWideIcon({
  style,
  size,
  strokeWidth = 1.3,
}: {
  style?: StyleProp<TextStyle>
  size?: string | number
  strokeWidth?: number
}) {
  return (
    <Svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth || 1}
      stroke="currentColor"
      width={size || 24}
      height={size || 24}
      style={style}>
      <Rect x="4" y="6" width="16" height="12" strokeLinejoin="round" />
    </Svg>
  )
}

export function RectTallIcon({
  style,
  size,
  strokeWidth = 1.3,
}: {
  style?: StyleProp<TextStyle>
  size?: string | number
  strokeWidth?: number
}) {
  return (
    <Svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth || 1}
      stroke="currentColor"
      width={size || 24}
      height={size || 24}
      style={style}>
      <Rect x="6" y="4" width="12" height="16" strokeLinejoin="round" />
    </Svg>
  )
}

export function ComposeIcon({
  style,
  size,
  strokeWidth = 1.5,
}: {
  style?: StyleProp<TextStyle>
  size?: string | number
  strokeWidth?: number
}) {
  return (
    <Svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke="currentColor"
      width={size || 24}
      height={size || 24}
      style={style}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </Svg>
  )
}

export function ComposeIcon2({
  style,
  size,
  strokeWidth = 1.5,
  backgroundColor,
}: {
  style?: StyleProp<TextStyle>
  size?: string | number
  strokeWidth?: number
  backgroundColor: string
}) {
  return (
    <Svg
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke="currentColor"
      width={size || 24}
      height={size || 24}
      style={style}>
      <Rect
        strokeWidth={strokeWidth}
        x="4"
        y="4"
        width="16"
        height="16"
        rx="4"
        ry="4"
      />
      <Line
        x1="10"
        y1="14"
        x2="22"
        y2="2"
        strokeWidth={strokeWidth * 4}
        stroke={backgroundColor}
      />
      <Line
        strokeLinecap="round"
        x1="10"
        y1="14"
        x2="18.5"
        y2="5.5"
        strokeWidth={strokeWidth * 1.5}
      />
      <Line
        strokeLinecap="round"
        x1="20.5"
        y1="3.5"
        x2="21"
        y2="3"
        strokeWidth={strokeWidth * 1.5}
      />
    </Svg>
  )
}

export function SquarePlusIcon({
  style,
  size,
  strokeWidth = 1.5,
}: {
  style?: StyleProp<TextStyle>
  size?: string | number
  strokeWidth?: number
}) {
  return (
    <Svg
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke="currentColor"
      width={size || 24}
      height={size || 24}
      style={style}>
      <Line
        stroke-linecap="round"
        stroke-linejoin="round"
        x1="12"
        y1="5.5"
        x2="12"
        y2="18.5"
        strokeWidth={strokeWidth * 1.5}
      />
      <Line
        stroke-linecap="round"
        stroke-linejoin="round"
        x1="5.5"
        y1="12"
        x2="18.5"
        y2="12"
        strokeWidth={strokeWidth * 1.5}
      />
      <Rect
        strokeWidth={strokeWidth}
        x="4"
        y="4"
        width="16"
        height="16"
        rx="4"
        ry="4"
      />
    </Svg>
  )
}