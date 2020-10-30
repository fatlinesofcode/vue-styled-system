## vue-styled-components with styled-system example
- https://github.com/styled-components/vue-styled-components
- https://styled-system.com/api
## add theme provider
```
<div id="app">
<ThemeProvider :theme="theme">
    <main>
        <router-view />
    </main>
</ThemeProvider>
</div>
```

## create box component
```
<template>
  <StyledBox v-bind="$props">
    <slot />
  </StyledBox>
</template>

<script>
import styled from 'vue-styled-components'
import { space, width, fontSize, color } from 'styled-system'

const props = {
  fontSize: [Object, Number, String, Array],
  m: [Object, Number, String, Array],
  p: [Object, Number, String, Array],
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

```

## usage
```
<Box m="1" :bg="['red']" :fontSize="[2, 3]">box 1</Box
<Box m="1" bg="blue" fontSize="0">box 2</Box
<Box fontSize="0">Box3 component</Box>
```
