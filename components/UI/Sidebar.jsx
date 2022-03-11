/* eslint-disable @next/next/link-passhref */
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function SideBar() {
  const router = useRouter();
  const items = {
    home: router.pathname === '/',
    chart: router.pathname === '/chart',
    assets: router.pathname === '/assets',
    exchange: router.pathname === '/exchange',
    settings: router.pathname === '/settings',
  };

  return (
    <aside className='flex flex-col row-span-2 py-6 border-r border-gray-900'>
      <div className='flex justify-center mb-8'>
        <svg width='55' height='55' viewBox='0 0 55 55' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M32.0834 30.3646H22.9167C21.9772 30.3646 21.198 31.1437 21.198 32.0833C21.198 33.0229 21.9772 33.8021 22.9167 33.8021H32.0834C33.023 33.8021 33.8022 33.0229 33.8022 32.0833C33.8022 31.1437 33.023 30.3646 32.0834 30.3646Z'
            fill='#2A4DFF'
          />
          <path
            d='M22.9167 24.6354H27.5001C28.4397 24.6354 29.2188 23.8563 29.2188 22.9167C29.2188 21.9771 28.4397 21.1979 27.5001 21.1979H22.9167C21.9772 21.1979 21.198 21.9771 21.198 22.9167C21.198 23.8563 21.9772 24.6354 22.9167 24.6354Z'
            fill='#2A4DFF'
          />
          <path
            d='M37.102 4.58333H17.9208C9.57911 4.58333 4.6062 9.55624 4.6062 17.8979V37.0791C4.6062 45.4208 9.57911 50.3937 17.9208 50.3937H37.102C45.4437 50.3937 50.4166 45.4208 50.4166 37.0791V17.8979C50.4166 9.55624 45.4437 4.58333 37.102 4.58333ZM41.2499 34.375C41.2499 38.9583 38.9583 41.25 34.3749 41.25H20.6249C16.0416 41.25 13.7499 38.9583 13.7499 34.375V20.625C13.7499 16.0417 16.0416 13.75 20.6249 13.75H29.7916C34.3749 13.75 36.6666 16.0417 36.6666 20.625V22.9167C36.6666 24.1771 37.6978 25.2083 38.9583 25.2083C40.2187 25.2083 41.2499 26.2396 41.2499 27.5V34.375Z'
            fill='#2A4DFF'
          />
        </svg>
      </div>
      <div className='flex flex-col'>
        <Link href='/'>
          <div className='flex justify-center py-8 cursor-pointer'>
            <svg
              className={(items.home ? 'fill-white' : 'stroke-gray-500') + ' w-8 h-8'}
              viewBox='0 0 30 30'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M27.5 10.65V4.975C27.5 3.2125 26.7 2.5 24.7125 2.5H19.6625C17.675 2.5 16.875 3.2125 16.875 4.975V10.6375C16.875 12.4125 17.675 13.1125 19.6625 13.1125H24.7125C26.7 13.125 27.5 12.4125 27.5 10.65Z' />
              <path d='M27.5 24.7125V19.6625C27.5 17.675 26.7 16.875 24.7125 16.875H19.6625C17.675 16.875 16.875 17.675 16.875 19.6625V24.7125C16.875 26.7 17.675 27.5 19.6625 27.5H24.7125C26.7 27.5 27.5 26.7 27.5 24.7125Z' />
              <path d='M13.125 10.65V4.975C13.125 3.2125 12.325 2.5 10.3375 2.5H5.2875C3.3 2.5 2.5 3.2125 2.5 4.975V10.6375C2.5 12.4125 3.3 13.1125 5.2875 13.1125H10.3375C12.325 13.125 13.125 12.4125 13.125 10.65Z' />
              <path d='M13.125 24.7125V19.6625C13.125 17.675 12.325 16.875 10.3375 16.875H5.2875C3.3 16.875 2.5 17.675 2.5 19.6625V24.7125C2.5 26.7 3.3 27.5 5.2875 27.5H10.3375C12.325 27.5 13.125 26.7 13.125 24.7125Z' />
            </svg>
          </div>
        </Link>
        <Link href='/chart'>
          <div className='flex justify-center py-8 cursor-pointer'>
            {!items.chart && (
              <svg
                className='w-8 h-8 stroke-gray-500'
                width='30'
                height='30'
                viewBox='0 0 30 30'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11.25 27.5H18.75C25 27.5 27.5 25 27.5 18.75V11.25C27.5 5 25 2.5 18.75 2.5H11.25C5 2.5 2.5 5 2.5 11.25V18.75C2.5 25 5 27.5 11.25 27.5Z'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M9.1626 18.1127L12.1376 14.2502C12.5626 13.7002 13.3501 13.6002 13.9001 14.0252L16.1876 15.8252C16.7376 16.2502 17.5251 16.1502 17.9501 15.6127L20.8376 11.8877'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            )}
            {items.chart && (
              <svg
                className='w-8 h-8 fill-white'
                width='30'
                height='30'
                viewBox='0 0 30 30'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M20.2375 2.5H9.7625C5.2125 2.5 2.5 5.2125 2.5 9.7625V20.225C2.5 24.7875 5.2125 27.5 9.7625 27.5H20.225C24.775 27.5 27.4875 24.7875 27.4875 20.2375V9.7625C27.5 5.2125 24.7875 2.5 20.2375 2.5ZM21.575 12.45L18.6875 16.175C18.325 16.6375 17.8125 16.9375 17.225 17C16.6375 17.075 16.0625 16.9125 15.6 16.55L13.3125 14.75C13.225 14.675 13.125 14.675 13.075 14.6875C13.025 14.6875 12.9375 14.7125 12.8625 14.8125L9.8875 18.675C9.7 18.9125 9.425 19.0375 9.15 19.0375C8.95 19.0375 8.75 18.975 8.575 18.8375C8.1625 18.525 8.0875 17.9375 8.4 17.525L11.375 13.6625C11.7375 13.2 12.25 12.9 12.8375 12.825C13.4125 12.75 14 12.9125 14.4625 13.275L16.75 15.075C16.8375 15.15 16.925 15.15 16.9875 15.1375C17.0375 15.1375 17.125 15.1125 17.2 15.0125L20.0875 11.2875C20.4 10.875 21 10.8 21.4 11.125C21.8125 11.4625 21.8875 12.05 21.575 12.45Z' />
              </svg>
            )}
          </div>
        </Link>
        <Link href='/assets'>
          <div className='flex justify-center py-8 cursor-pointer'>
            {!items.assets && (
              <svg
                className='w-8 h-8 stroke-gray-500'
                width='30'
                height='30'
                viewBox='0 0 30 30'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M16.25 11.25H8.75' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                <path
                  d='M27.5 13.7124V16.2875C27.5 16.975 26.95 17.5375 26.25 17.5625H23.8C22.45 17.5625 21.2125 16.575 21.1 15.225C21.025 14.4375 21.325 13.7 21.85 13.1875C22.3125 12.7125 22.95 12.4375 23.65 12.4375H26.25C26.95 12.4625 27.5 13.0249 27.5 13.7124Z'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M21.85 13.1875C21.325 13.7 21.025 14.4375 21.1 15.225C21.2125 16.575 22.45 17.5625 23.8 17.5625H26.25V19.375C26.25 23.125 23.75 25.625 20 25.625H8.75C5 25.625 2.5 23.125 2.5 19.375V10.625C2.5 7.225 4.55 4.85 7.7375 4.45C8.0625 4.4 8.4 4.375 8.75 4.375H20C20.325 4.375 20.6375 4.38748 20.9375 4.43748C24.1625 4.81248 26.25 7.2 26.25 10.625V12.4375H23.65C22.95 12.4375 22.3125 12.7125 21.85 13.1875Z'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            )}
            {items.assets && (
              <svg
                className='w-8 h-8 fill-white'
                width='31'
                height='30'
                viewBox='0 0 31 30'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M27.5015 13.7125V16.2875C27.5015 16.975 26.9515 17.5375 26.2515 17.5625H23.8015C22.4515 17.5625 21.214 16.575 21.1015 15.225C21.0265 14.4375 21.3265 13.7 21.8515 13.1875C22.314 12.7125 22.9515 12.4375 23.6515 12.4375H26.2515C26.9515 12.4625 27.5015 13.025 27.5015 13.7125Z' />
                <path d='M25.589 19.4375H23.8015C21.4265 19.4375 19.4265 17.65 19.2265 15.375C19.114 14.075 19.589 12.775 20.539 11.85C21.339 11.025 22.4515 10.5625 23.6515 10.5625H25.589C25.9515 10.5625 26.2515 10.2625 26.214 9.9C25.939 6.8625 23.9265 4.7875 20.939 4.4375C20.639 4.3875 20.3265 4.375 20.0015 4.375H8.75146C8.40146 4.375 8.06396 4.4 7.73896 4.45C4.55146 4.85 2.50146 7.225 2.50146 10.625V19.375C2.50146 22.825 5.30146 25.625 8.75146 25.625H20.0015C23.5015 25.625 25.914 23.4375 26.214 20.1C26.2515 19.7375 25.9515 19.4375 25.589 19.4375ZM16.2515 12.1875H8.75146C8.23896 12.1875 7.81396 11.7625 7.81396 11.25C7.81396 10.7375 8.23896 10.3125 8.75146 10.3125H16.2515C16.764 10.3125 17.189 10.7375 17.189 11.25C17.189 11.7625 16.764 12.1875 16.2515 12.1875Z' />
              </svg>
            )}
          </div>
        </Link>
        <Link href='/exchange'>
          <div className='flex justify-center py-8 cursor-pointer'>
            {!items.exchange && (
              <svg
                className='w-8 h-8 stroke-gray-500'
                width='30'
                height='30'
                viewBox='0 0 30 30'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M28.75 19.9624C28.75 24.7999 24.8375 28.7124 20 28.7124L21.3125 26.5249'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M1.25 9.9624C1.25 5.1249 5.1625 1.2124 10 1.2124L8.6875 3.3999'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M8.27539 16.3374H11.7879C12.5629 16.3374 13.2004 17.0374 13.2004 17.7499C13.2004 18.5249 12.5754 19.1624 11.7879 19.1624H8.27539V16.3374Z'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M8.27539 19.1626H12.3004C13.1879 19.1626 13.9129 19.7876 13.9129 20.5751C13.9129 21.3501 13.1879 21.9876 12.3004 21.9876H8.27539V19.1626Z'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M10.5254 21.9751V23.3751'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M10.5254 14.9375V16.3375'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M18.5627 19.1625C18.5627 23.425 15.1127 26.875 10.8502 26.875C6.5877 26.875 3.1377 23.425 3.1377 19.1625C3.1377 14.9 6.5877 11.45 10.8502 11.45C11.0502 11.45 11.2377 11.4625 11.4502 11.475C15.2377 11.7625 18.2627 14.7875 18.5502 18.575C18.5502 18.7625 18.5627 18.95 18.5627 19.1625Z'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M26.8752 10.8375C26.8752 15.1 23.4252 18.55 19.1627 18.55H18.5502C18.2627 14.7625 15.2377 11.7375 11.4502 11.45V10.8375C11.4502 6.57498 14.9002 3.125 19.1627 3.125C23.4252 3.125 26.8752 6.57498 26.8752 10.8375Z'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            )}
            {items.exchange && (
              <svg
                className='w-8 h-8 fill-white'
                width='30'
                height='30'
                viewBox='0 0 30 30'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M28.75 19.0249C28.2375 19.0249 27.8125 19.4499 27.8125 19.9624C27.8125 23.6624 25.2375 26.7624 21.775 27.5749L22.1125 27.0124C22.375 26.5624 22.2375 25.9874 21.7875 25.7249C21.35 25.4624 20.7625 25.5999 20.5 26.0499L19.1875 28.2374C19.0125 28.5249 19.0125 28.8874 19.175 29.1749C19.3375 29.4749 19.65 29.6499 19.9875 29.6499C25.325 29.6499 29.675 25.2999 29.675 19.9624C29.6875 19.4499 29.2625 19.0249 28.75 19.0249Z' />
                <path d='M10 0.274902C4.6625 0.274902 0.3125 4.6249 0.3125 9.9624C0.3125 10.4749 0.7375 10.8999 1.25 10.8999C1.7625 10.8999 2.1875 10.4749 2.1875 9.9624C2.1875 6.2624 4.7625 3.1624 8.225 2.3499L7.8875 2.9124C7.625 3.3624 7.7625 3.9374 8.2125 4.1999C8.65 4.4624 9.2375 4.3249 9.5 3.8749L10.8125 1.6874C10.975 1.3999 10.9875 1.0499 10.8125 0.749902C10.65 0.462402 10.3375 0.274902 10 0.274902Z' />
                <path d='M26.8748 10.8375C26.8748 14.6875 24.0748 17.8625 20.4123 18.45C20.4123 18.4375 20.4123 18.4375 20.4123 18.425C20.0498 13.7625 16.2748 9.9625 11.5498 9.5875C12.1373 5.925 15.3123 3.125 19.1623 3.125C23.4248 3.125 26.8748 6.575 26.8748 10.8375Z' />
                <path d='M12.2629 17.7499C12.2629 17.5624 12.0504 17.2749 11.7879 17.2749H9.21289V18.2124H11.7879C12.0504 18.2249 12.2629 18.0124 12.2629 17.7499Z' />
                <path d='M12.2879 20.1001H11.7879H9.21289V21.0376H12.3004C12.7004 21.0376 12.9754 20.7876 12.9754 20.5626C12.9754 20.3376 12.6879 20.1001 12.2879 20.1001Z' />
                <path d='M18.5375 18.5625C18.25 14.775 15.225 11.75 11.4375 11.4625C11.2375 11.45 11.05 11.4375 10.8375 11.4375C6.575 11.4375 3.125 14.8875 3.125 19.1625C3.125 23.425 6.575 26.875 10.8375 26.875C15.1 26.875 18.5625 23.425 18.5625 19.1625C18.5625 18.95 18.55 18.7625 18.5375 18.5625ZM12.2875 22.9125H11.4625V23.3875C11.4625 23.9 11.0375 24.325 10.525 24.325C10.0125 24.325 9.5875 23.9 9.5875 23.3875V22.9125H8.275C7.7625 22.9125 7.3375 22.4875 7.3375 21.975V19.1625V16.35C7.3375 15.8375 7.7625 15.4125 8.275 15.4125H9.5875V14.9375C9.5875 14.425 10.0125 14 10.525 14C11.0375 14 11.4625 14.425 11.4625 14.9375V15.4125H11.7875C13.0375 15.4125 14.1375 16.5125 14.1375 17.7625C14.1375 18.125 14.05 18.4625 13.9 18.775C14.475 19.2 14.8375 19.85 14.8375 20.575C14.8375 21.8625 13.7 22.9125 12.2875 22.9125Z' />
              </svg>
            )}
          </div>
        </Link>
        <Link href='/settings'>
          <div className='flex justify-center py-8 mb-10 cursor-pointer'>
            {!items.settings && (
              <svg
                className='w-8 h-8 mb-2 stroke-gray-500'
                width='30'
                height='30'
                viewBox='0 0 30 30'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M15 18.75C17.0711 18.75 18.75 17.0711 18.75 15C18.75 12.9289 17.0711 11.25 15 11.25C12.9289 11.25 11.25 12.9289 11.25 15C11.25 17.0711 12.9289 18.75 15 18.75Z'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M2.5 16.0998V13.8998C2.5 12.5998 3.5625 11.5248 4.875 11.5248C7.1375 11.5248 8.0625 9.9248 6.925 7.9623C6.275 6.8373 6.6625 5.3748 7.8 4.7248L9.9625 3.4873C10.95 2.8998 12.225 3.2498 12.8125 4.2373L12.95 4.4748C14.075 6.4373 15.925 6.4373 17.0625 4.4748L17.2 4.2373C17.7875 3.2498 19.0625 2.8998 20.05 3.4873L22.2125 4.7248C23.35 5.3748 23.7375 6.8373 23.0875 7.9623C21.95 9.9248 22.875 11.5248 25.1375 11.5248C26.4375 11.5248 27.5125 12.5873 27.5125 13.8998V16.0998C27.5125 17.3998 26.45 18.4748 25.1375 18.4748C22.875 18.4748 21.95 20.0748 23.0875 22.0373C23.7375 23.1748 23.35 24.6248 22.2125 25.2748L20.05 26.5123C19.0625 27.0998 17.7875 26.7498 17.2 25.7623L17.0625 25.5248C15.9375 23.5623 14.0875 23.5623 12.95 25.5248L12.8125 25.7623C12.225 26.7498 10.95 27.0998 9.9625 26.5123L7.8 25.2748C6.6625 24.6248 6.275 23.1623 6.925 22.0373C8.0625 20.0748 7.1375 18.4748 4.875 18.4748C3.5625 18.4748 2.5 17.3998 2.5 16.0998Z'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            )}
            {items.settings && (
              <svg
                className='w-8 h-8 mb-2 fill-white'
                width='30'
                height='30'
                viewBox='0 0 30 30'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M25.125 11.5248C22.8625 11.5248 21.9375 9.9248 23.0625 7.9623C23.7125 6.8248 23.325 5.3748 22.1875 4.7248L20.025 3.4873C19.0375 2.8998 17.7625 3.2498 17.175 4.2373L17.0375 4.4748C15.9125 6.4373 14.0625 6.4373 12.925 4.4748L12.7875 4.2373C12.225 3.2498 10.95 2.8998 9.9625 3.4873L7.8 4.7248C6.6625 5.3748 6.275 6.8373 6.925 7.9748C8.0625 9.9248 7.1375 11.5248 4.875 11.5248C3.575 11.5248 2.5 12.5873 2.5 13.8998V16.0998C2.5 17.3998 3.5625 18.4748 4.875 18.4748C7.1375 18.4748 8.0625 20.0748 6.925 22.0373C6.275 23.1748 6.6625 24.6248 7.8 25.2748L9.9625 26.5123C10.95 27.0998 12.225 26.7498 12.8125 25.7623L12.95 25.5248C14.075 23.5623 15.925 23.5623 17.0625 25.5248L17.2 25.7623C17.7875 26.7498 19.0625 27.0998 20.05 26.5123L22.2125 25.2748C23.35 24.6248 23.7375 23.1623 23.0875 22.0373C21.95 20.0748 22.875 18.4748 25.1375 18.4748C26.4375 18.4748 27.5125 17.4123 27.5125 16.0998V13.8998C27.5 12.5998 26.4375 11.5248 25.125 11.5248ZM15 19.0623C12.7625 19.0623 10.9375 17.2373 10.9375 14.9998C10.9375 12.7623 12.7625 10.9373 15 10.9373C17.2375 10.9373 19.0625 12.7623 19.0625 14.9998C19.0625 17.2373 17.2375 19.0623 15 19.0623Z' />
              </svg>
            )}
          </div>
        </Link>
        <div className='flex flex-col items-center py-8 cursor-pointer'>
          <svg
            className='mb-2 fill-gray-500 w-7 h-7'
            viewBox='0 0 30 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M16.2498 14.6875C16.0123 14.6875 15.7748 14.6 15.5873 14.4125C15.2248 14.05 15.2248 13.45 15.5873 13.0875L25.8373 2.8375C26.1998 2.475 26.7998 2.475 27.1623 2.8375C27.5248 3.2 27.5248 3.8 27.1623 4.1625L16.9123 14.4125C16.7248 14.6 16.4873 14.6875 16.2498 14.6875Z' />
            <path d='M27.5 9.4375C26.9875 9.4375 26.5625 9.0125 26.5625 8.5V3.4375H21.5C20.9875 3.4375 20.5625 3.0125 20.5625 2.5C20.5625 1.9875 20.9875 1.5625 21.5 1.5625H27.5C28.0125 1.5625 28.4375 1.9875 28.4375 2.5V8.5C28.4375 9.0125 28.0125 9.4375 27.5 9.4375Z' />
            <path d='M18.75 28.4375H11.25C4.4625 28.4375 1.5625 25.5375 1.5625 18.75V11.25C1.5625 4.4625 4.4625 1.5625 11.25 1.5625H13.75C14.2625 1.5625 14.6875 1.9875 14.6875 2.5C14.6875 3.0125 14.2625 3.4375 13.75 3.4375H11.25C5.4875 3.4375 3.4375 5.4875 3.4375 11.25V18.75C3.4375 24.5125 5.4875 26.5625 11.25 26.5625H18.75C24.5125 26.5625 26.5625 24.5125 26.5625 18.75V16.25C26.5625 15.7375 26.9875 15.3125 27.5 15.3125C28.0125 15.3125 28.4375 15.7375 28.4375 16.25V18.75C28.4375 25.5375 25.5375 28.4375 18.75 28.4375Z' />
          </svg>
          <span className='text-xs font-medium text-gray-600'>Version 2.30</span>
          <a href='https://github.com/MNBoy' target='_blank' rel='noreferrer'>
            <span className='text-xs text-gray-600'>Github</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
