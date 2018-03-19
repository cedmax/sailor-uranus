import React from 'react'
import Emojify from 'react-emojione'
import {Emoj} from 'styled/components'

const mapping = {
  'oink': ':pig_nose:',
  'woof': ':dog:',
  'poo': ':poop:',
  'male': ':man:',
  'female': ':woman:',
  'morning': ':coffee:',
  'afternoon': ':office:',
  'evening': ':couch_and_lamp:',
  'night': ':bed:'
}

export default ({emoji}) => (
  <Emojify output="unicode"><Emoj>{mapping[emoji]}</Emoj></Emojify>
)