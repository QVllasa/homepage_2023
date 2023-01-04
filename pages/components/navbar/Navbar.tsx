import {Popover} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'

const navigation = [
    {name: 'Dashboard', href: '#', current: true},
    {name: 'Calendar', href: '#', current: false},
    {name: 'Teams', href: '#', current: false},
    {name: 'Directory', href: '#', current: false},
]


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        <>
            {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
            <Popover
                as="nav"
                className={({open}) =>
                    classNames(
                        open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
                        'bg-white shadow-sm lg:static lg:overflow-y-visible'
                    )
                }
            >
                {({open}) => (
                    <>

                        {/*Desktop*/}
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="relative flex justify-between md:gap-8 md:grid md:grid-cols-12">
                                <div className="flex md:inset-y-0 md:left-0 md:static md:col-span-2">
                                    <div className="flex flex-shrink-0 items-center">
                                        <div className="flex justify-start lg:w-0 lg:flex-1">
                                            <a href="#" className='font-bold text-blue-600 text-6xl cursor-pointer'>Q
                                                <span className='text-yellow-400'>.</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:flex md:px-8 lg:px-0 md:col-span-8 md:justify-center">
                                    <div
                                        className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                                        <div className="hidden sm:ml-6 sm:block">
                                            <div className="flex space-x-4">
                                                {navigation.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-black hover:text-white',
                                                            'px-3 py-2 rounded-md text-sm font-medium'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center md:absolute md:inset-y-0 md:right-0 md:hidden">
                                    {/* Mobile menu button */}
                                    <Popover.Button
                                        className="-mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Open menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true"/>
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
                                        )}
                                    </Popover.Button>
                                </div>
                                <div className="hidden md:flex md:items-center md:justify-end md:col-span-2">
                                    <a
                                        href="pages#"
                                        className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                                    >
                                        Contact
                                    </a>
                                </div>
                            </div>
                        </div>


                        {/*Mobile*/}
                        <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
                            <div className="mx-auto max-w-3xl space-y-1 px-2 pt-2 pb-3 sm:px-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50',
                                            'block rounded-md py-2 px-3 text-base font-medium'
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                                <a
                                    href="pages#"
                                    className="flex w-full items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                                >
                                    Contact
                                </a>
                            </div>
                        </Popover.Panel>
                    </>
                )}
            </Popover>
        </>
    )
}
