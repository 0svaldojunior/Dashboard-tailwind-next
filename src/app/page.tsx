import {
  FileInputControl,
  FileInputFileList,
  FileInputImagePreview,
  FileInputRoot,
  FileInputTrigger
} from '@/components/Form/FileInput'
import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { Textarea } from '@/components/Form/Textarea'
import { InputControl, InputPrefix, InputRoot } from '@/components/Input'
import { SettingsTabs } from '@/components/SettingsTabs'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </div>

        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <InputRoot>
                <InputControl id="firstName" defaultValue="Osvaldo" />
              </InputRoot>

              <InputRoot>
                <InputControl defaultValue="Júnior" />
              </InputRoot>
            </div>
            <div />
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email
            </label>
            <InputRoot>
              <InputPrefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </InputPrefix>
              <InputControl
                id="email"
                type="email"
                defaultValue="app.o.r.jr@gmail.com"
              />
            </InputRoot>
            <div />
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>

            <FileInputRoot className="flex items-start gap-5">
              <FileInputImagePreview />
              <FileInputTrigger />
              <FileInputControl />
            </FileInputRoot>
            <div />
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
            <InputRoot>
              <InputControl id="role" defaultValue="CTO" />
            </InputRoot>
            <div />
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>
            <Select placeholder="Select a country...">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United States" />
            </Select>
            <div />
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>
            <Select placeholder="Select a timezone...">
              <SelectItem value="utc3" text="America São Paulo (UTC-03:00)" />
              <SelectItem
                value="utc8"
                text="Pacific Standard Time (UTC-08:00)"
              />
            </Select>
            <div />
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem
                    value="normal"
                    defaultChecked
                    text="Normal Text"
                  />
                  <SelectItem value="md" text="Markdown" />
                </Select>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>

                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>

                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>

                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>

                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </button>
                </div>
              </div>

              <Textarea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
            <div />
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="portfolioProjects"
              className="text-sm font-medium text-zinc-700"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>
            <FileInputRoot>
              <FileInputTrigger />
              <FileInputFileList />
              <FileInputControl multiple />
            </FileInputRoot>
            <div />
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
