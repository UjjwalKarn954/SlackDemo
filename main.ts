import { Construct } from "constructs";
import { App, S3Backend, TerraformStack } from "cdktf";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    // new S3Backend(this, "slack-test-bucket", {
    //   bucket: "",
    //   key: "",
    //   region: ""
    // })

  }
}

const app = new App();
new MyStack(app, "SlackTerraform");
app.synth();
