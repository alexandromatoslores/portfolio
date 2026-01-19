import React from 'react'
import { SOFT_SKILLS } from '@/constants/soft-skills'
import { SoftSkillItem } from './soft-skill-item'

const SoftSkillsContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 mt-4 gap-x-5 gap-y-4'>
      {SOFT_SKILLS?.map(skill => <SoftSkillItem key={skill?.title} skill={skill} />)}
    </section>
  )
}

export default SoftSkillsContainer
