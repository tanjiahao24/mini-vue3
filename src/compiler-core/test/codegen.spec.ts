import { baseParse } from "../src/parse"
import { generate } from '../src/codegen'
import { transform } from "../src/transform"


describe('codegen', () => {

  it('string', () => {
    const ast = baseParse('hello')

    transform(ast)
    
    const { code } = generate(ast)

    expect(code).toMatchSnapshot()
  })

})