import {Args, Command} from '@oclif/core'

export default class Profile extends Command {
  static args = {
    username: Args.string({description: 'GitHub username', required: true}),
  }

  static description = 'fetch profile bio by GitHub username'

  static examples = [
    `$ profile Cerchie 
"bio: hello my name is Lucia Cerchie and I like cute cats." (./src/commands/profile/index.ts)
`,
  ]

  async run(): Promise<void> {
    const {args} = await this.parse(Profile)
    console.log(args.username)
    await fetch(`https://api.github.com/users/${args.username}`)
    .then(response => response.json())
    .then(data => {
      this.log(`This is the story of ${args.username}'s life: ${JSON.stringify(data.bio)}`)
    })
    .catch(Error => console.error(Error))

  }
}
