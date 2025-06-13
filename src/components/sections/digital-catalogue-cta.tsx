'use client'

import {Button} from '@/components/ui/button'
import {ArrowUpRight} from 'lucide-react'

export function DigitalCatalogueCTA() {
  return (
    <div className='w-full bg-zinc-900 py-6'>
      <div className='container mx-auto px-4 md:px-6 flex justify-center'>
        <Button
          id='cta-digital-catalogue'
          size='lg'
          className='bg-yellow-400 hover:bg-yellow-500 text-black rounded-full px-8'
          asChild
        >
          <a href='/catalogue.pdf' target='_blank' rel='noopener noreferrer'>
            See our free digital catalogue{' '}
            <ArrowUpRight className='ml-2 h-4 w-4' />
          </a>
        </Button>
      </div>
    </div>
  )
}
