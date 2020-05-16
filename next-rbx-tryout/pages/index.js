import React from 'react';
import { Content, Section, Input } from "rbx";

function index(){
  return(
    <div>
      <Section>
        <Content>
          Hello world from <a href="https://github.com/dfee/rbx">rbx</a>!
        </Content>
        <Input type="text" placeholder="text input"></Input>

      </Section>
    </div>
  )
}

export default index