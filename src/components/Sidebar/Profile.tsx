import { Button } from '../Button'
import Image from 'next/image'
import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="https://github.com/0svaldojunior.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Osvaldo Junior
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          o.r.jr@hotmail.comfeknbdmsfanbvm ,zmklnmkbdknlsdfbvkcn
        </span>
      </div>

      <Button type="button" variant="ghost" className="ml-14">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
