<p align="center">
  <a href="https://github.com/Bounceapp/rendert-action/actions"><img alt="typescript-action status" src="https://github.com/Bounceapp/render-action/workflows/build/badge.svg"></a>
</p>

# Render GitHub Action

Use this action to track a deployment on [Render](https://render.com)

## Publish to a distribution branch

Actions are run from GitHub repos so we will checkin the packed dist folder.

Then run [ncc](https://github.com/zeit/ncc) and push the results:

```bash
$ npm run package
$ git add dist
$ git commit -a -m "prod dependencies"
$ git push origin releases/v1
```

Note: We recommend using the `--license` option for ncc, which will create a license file for all of the production node modules used in your project.

Your action is now published! :rocket:

See the [versioning documentation](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md)
