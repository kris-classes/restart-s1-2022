# Instruction

We want to deploy our React project from `react_day_3` folder. The reason is because at this stage, we do not have a backend yet. Otherwise the hosting architecture will get more complicated than what this exercise is meant to show.

## Step 1: generate the build version for React

Make sure you are in the home folder:

```
.
├── README.md
├── backend
├── deployment_day_1
├── deployment_day_2
├── ipcalc
├── node_modules
├── public
├── python_scripts
├── react_day_1
├── react_day_2
├── react_day_3
├── react_day_4
├── react_day_5
├── react_day_6
├── shell_scripts
├── sql_scripts
├── src
└── utils.md

16 directories, 2 files
```

Now navigate to folder `react_day_3`

```sh
cd react_day_3
```

Install Node packages and generate the build version for React

```sh
npm install
npm run build
```

Preview to see if we can find the build folder

```
.
├── README.md
├── build
├── node_modules
├── package-lock.json
├── package.json
├── public
└── src

4 directories, 3 files
```

## Step 2: prepare your S3 bucket for static website hosting

### Login to your AWS account, or the Lab AWS console

![](step%202%20navigate%20to%20s3%20console.png)

### Create an S3 bucket

![](step%202%20create%20public%20bucket.png)

Leave all the other options untouched.

![](step%202%20click%20to%20create%20bucket.png)

### Verify S3 bucket was created

![](step%202%20verify%20bucket.png)

### Navigate to the Permissions tab

![](step%202%20go%20to%20permission.png)

### Open the Bucket policy editor

![](step%202%20open%20policy%20editor.png)

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": ["s3:GetObject"],
      "Resource": ["arn:aws:s3:::Bucket-Name/*"]
    }
  ]
}
```

Replace `Bucket-Name` template value with the actual bucket name that you have

![](step%202%20edit%20bucket%20policy.png)

Save

![](step%202%20save%20bucket%20policy%20to%20apply.png)

## Step 3: upload the build version of React to S3 bucket

Find the build folder in `react_day_3`

![](step%203%20find%20files.png)

Upload by dragging the file into the web console

![](step%203%20upload.png)

To view the static website, find the index.html link from s3 console

![](step%203%20navigate%20index%20html.png)

Open static website home page

![](step%203%20home%20page.png)
