import {expect, test} from '@oclif/test'

describe('profile', () => {
  test
  .stdout()
  .command(['profile', 'Cerchie'])
  .it('runs profile cmd', ctx => {
    expect(ctx.stdout).to.contain('This is the story of')
  })
})
