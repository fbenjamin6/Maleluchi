export function QuoteIcon() {
  return (
    <div className='rounded-full bg-white p-2 absolute top-0 -translate-y-1/2'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='44'
        height='44'
        viewBox='0 0 24 24'
        fill='currentColor'
        className='text-orange '
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M9 5a2 2 0 0 1 2 2v6c0 3.13 -1.65 5.193 -4.757 5.97a1 1 0 1 1 -.486 -1.94c2.227 -.557 3.243 -1.827 3.243 -4.03v-1h-3a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 2 -2z' />
        <path d='M18 5a2 2 0 0 1 2 2v6c0 3.13 -1.65 5.193 -4.757 5.97a1 1 0 1 1 -.486 -1.94c2.227 -.557 3.243 -1.827 3.243 -4.03v-1h-3a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 2 -2z' />
      </svg>
    </div>
  )
}

export function StarIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='currentColor'
      className='text-orange'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z' />
    </svg>
  )
}

export function ChevronArrowRightIcon({ classes }: { classes: string }) {
  return (
    <img
      src='./src/assets/ChevronArrowRight.svg'
      alt=''
      className={`${classes}`}
    />
  )
}
export function ChevronArrowUpIcon({ classes }: { classes: string }) {
  return (
    <img
      src='./src/assets/ChevronArrowUp.svg'
      alt=''
      className={`w-7 ease-out ${classes}`}
    />
  )
}

export function InstagramIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z' />
      <path d='M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0' />
      <path d='M16.5 7.5v.01' />
    </svg>
  )
}

export function WhatsAppIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9' />
      <path d='M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1' />
    </svg>
  )
}

export function PhoneIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='28'
      height='28'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
      className='text-white w-6 h-6 xl:w-7 xl:h-7'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2' />
    </svg>
  )
}
