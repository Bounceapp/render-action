<p align="center">
  <a href="https://github.com/Bounceapp/rendert-action/actions"><img alt="typescript-action status" src="https://github.com/Bounceapp/render-action/workflows/build/badge.svg"></a>
</p>

# Render GitHub Action

Use this action to track a deployment on [Render](https://render.com)

## Action Inputs

| Name | Description | Required |
| -----| ----------- | -------- |
| `service-id`   | The id of the Render service to be tracked. | **Yes** ✅ |
| `render-token` | Render API Token to use - [see documentation](https://render.com/docs/api#creating-an-api-key) | No ❌
| `github-token` | GitHub Token to use | No ❌
| `sleep`        | Sleep time between the render deployment success and setting the Github deployment as successful. **Note:** Retries will be attempted every 5 seconds</br>*(default: 0)* | No ❌
| `retries`      | Maximum number of retries trying to find the deployment.<br/>*(default: 50 [5 seconds])* | No ❌
| `wait`         | Sleep time between retries to find Render deployments statuses<br/>*(default: 8000 [8 seconds])* | No ❌

## Example usage

```yaml
name: Render
on: [pull_request]:
jobs:
  deploy:
    name: Wait for Deploy
    runs-on: ubuntu-latest
    steps:
      - name: Wait for Render Deployment
        uses: bounceapp/render-action@0.6.0
        with:
          render-token: ${{ secrets.RENDER_TOKEN }}
          github-token: ${{ secrets.GITHUB_TOKEN }}
          service-id: srv-xxxxxxxxxxxxxxxxxxxx
          retries: 20
          wait: 16000
          sleep: 30000
```

## Contribute

### Publish to a distribution branch

Actions are run from GitHub repos so we will checkin the packed dist folder.

Then run [ncc](https://github.com/zeit/ncc) and push the results:

```bash
$ npm run all
$ git add dist
$ git commit -a -m "prod dependencies"
$ git push origin releases/v1
```

See the [versioning documentation](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md)
