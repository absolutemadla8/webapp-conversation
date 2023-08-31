import type { FC } from 'react'
import React from 'react'

export type IHeaderProps = {
  title: string
  isMobile?: boolean
  onShowSideBar?: () => void
  onCreateNewChat?: () => void
}
const Header: FC<IHeaderProps> = ({
  title,
  isMobile,
  onShowSideBar,
  onCreateNewChat,
}) => {
  return (
    <div className="shrink-0 flex items-center mt-5 justify-between h-12 px-3 bg-gray-100">
      <div className="fixed top-0 left-0 right-0 z-10 backdrop-blur-md border-b border-neutral-200 bg-stone-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-6">
              <a href="https://dexa.ai/#podcasts" className="text-slate-600">
                <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor">
                  <path fill-rule="evenodd" d="M64 0H0v16.942h.001c8.317 0 15.059 6.742 15.059 15.06 0 8.316-6.742 15.058-15.059 15.058H0V64h64V0Z" clip-rule="evenodd"></path>
                </svg>
              </a>
              <a href="https://dexa.ai/huberman" className="text-lg font-medium uppercase cursor-pointer">Peak AI</a>
            </div>
            <a href="#" className="flex items-center gap-1 px-4 py-2 border rounded-full text-sm font-medium cursor-pointer">Ask</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Header)
