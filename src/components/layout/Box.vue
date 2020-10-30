<template>
  <StyledBox v-bind="$props">
    <slot />
  </StyledBox>
</template>

<script>
import styled from 'vue-styled-components'
import { space, width, fontSize, color } from 'styled-system'

const props = {
  width: [Object, Number, String, Array],
  height: [Object, Number, String, Array],
  minWidth: [Object, Number, String, Array],
  minHeight: [Object, Number, String, Array],
  maxWidth: [Object, Number, String, Array],
  maxHeight: [Object, Number, String, Array],
  size: String,
  fontSize: [Object, Number, String, Array],
  display: String,
  verticalAlign: String,
  overflow: String,
  overflowX: String,
  overflowY: String,
  m: [Object, Number, String, Array],
  mt: [Object, Number, String, Array],
  mr: [Object, Number, String, Array],
  mb: [Object, Number, String, Array],
  ml: [Object, Number, String, Array],
  mx: [Object, Number, String, Array],
  my: [Object, Number, String, Array],
  p: [Object, Number, String, Array],
  pt: [Object, Number, String, Array],
  pr: [Object, Number, String, Array],
  pb: [Object, Number, String, Array],
  pl: [Object, Number, String, Array],
  px: [Object, Number, String, Array],
  py: [Object, Number, String, Array],
  color: [Object, String, Array],
  bg: [Object, String, Array],
  backgroundColor: [Object, String, Array],
  opacity: [Object, Number, Array]
}

const StyledBox = styled('div', props)`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`
export default {
  name: 'Box',
  components: {
    StyledBox
  },
  props
}
</script>
