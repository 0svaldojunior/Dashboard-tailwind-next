'use client'

import { ComponentProps, useMemo } from 'react'

import Image from 'next/image'
import { User } from 'lucide-react'
import { useFileInput } from './Root'

export type ImagePreviewProps = ComponentProps<'div'>

export function ImagePreview(props: ImagePreviewProps) {
  const { files } = useFileInput()

  const previewURL = useMemo(() => {
    if (files.length === 0) {
      return null
    }

    return URL.createObjectURL(files[0])
  }, [files])

  if (previewURL === null) {
    return (
      <div
        className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50 dark:bg-violet-500/10"
        {...props}
      >
        <User className="h-8 w-8 text-violet-500 dark:text-violet-300" />
      </div>
    )
  } else {
    return (
      <Image
        src={previewURL}
        alt=""
        className="h-16 w-16 rounded-full object-cover"
      />
    )
  }
}
