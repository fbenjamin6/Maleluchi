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
