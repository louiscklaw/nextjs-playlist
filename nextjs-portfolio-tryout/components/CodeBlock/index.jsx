import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
// import theme from 'prism-react-renderer/themes/dracula'
// import theme from 'prism-react-renderer/themes/vsDark'
import theme from 'prism-react-renderer/themes/nightOwl'
// import theme from 'prism-react-renderer/themes/duotoneDark'
// import theme from 'prism-react-renderer/themes/oceanicNext'
// import theme from 'prism-react-renderer/themes/shadesOfPurple'
// import theme from 'prism-react-renderer/themes/vsDarkPlus'

import { Box, Typography } from '@mui/material'

function LineNo({ children }) {
  return <div style={{ display: 'inline-block', width: '2em', userSelect: 'none', opacity: '0.3' }}>{children}</div>
}

export default ({ children }) => {
  // const exampleCode = children.props.children.trim()
  let { children: exampleCode, className: code_language } = children.props
  console.log({ children, exampleCode, code_language })

  return (
    <>
      <Highlight
        {...defaultProps}
        theme={theme}
        code={exampleCode.trim()}
        language={code_language && code_language.split('-')[1]}
        className="code-looker-class"
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Box style={{ backgroundColor: 'rgb(1, 22, 39)', borderRadius: '0.5rem' }} p={'0.5rem'}>
            <Box sx={{ color: 'white' }}>
              <Typography variant="caption">Source code:</Typography>
            </Box>
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  <LineNo>{i + 1}</LineNo>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          </Box>
        )}
      </Highlight>
    </>
  )
}
