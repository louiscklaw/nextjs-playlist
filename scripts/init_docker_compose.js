const fs = require("fs");

let PROJECT_DIRS = [
  "nextjs12-helloworld",
  "next-context-hook-tryout",
  "next-formik-tryout",
  "next-helloworld-tryout",
  "next-i18next-tryout",
  "nextjs12-docker-helloworld",
  "nextjs-12-mui-helloworld",
  "nextjs12-react-query-tryout",
  "nextjs12-react-stl-viewer-tryout",
  "nextjs12-react-stl-viewer-tryout-mui",
  "nextjs-blog",
  "nextjs-dynamic-routing-tryout",
  "nextjs-express-tryout",
  "nextjs-google-analytics-tryout",
  "nextjs-mui-helloworld",
  "nextjs-portfolio-tryout",
  "nextjs-sentry-tryout",
  "nextjs-tryout",
  "next-mdx",
  "next-offline-helloworld",
  "next-pwa-9_plus",
  "next-pwa-minimal",
  "next-rbx-tryout",
  "next-react-router-tryout",
  "next-routing-tryout",
  "next-seo-helloworld",
  "next-with-apollo",
  "react-next-tryout",
  "with-next-offline-app",
  "with-next-routes-app",
  "with-next-sass-app",
];

PROJECT_DIRS.forEach((project_dir) => {
  if (fs.existsSync(`./${project_dir}/docker-compose.yml`)) {
    fs.copyFileSync("/home/logic/_workspace/nextjs-playlist/nextjs-portfolio-tryout/docker-compose.yml", `./${project_dir}/docker-compose.yml`);
  }

  if (!fs.existsSync(`./${project_dir}/entry_point.sh`)) {
    fs.copyFileSync("/home/logic/_workspace/nextjs-playlist/nextjs-portfolio-tryout/entry_point.sh", `./${project_dir}/entry_point.sh`);
  }

  if (!fs.existsSync(`./${project_dir}/Dockerfile`)) {
    fs.copyFileSync("/home/logic/_workspace/nextjs-playlist/nextjs-portfolio-tryout/Dockerfile", `./${project_dir}/Dockerfile`);
  }

  if (fs.existsSync(`./${project_dir}/package.json`)) {
    let input_json = JSON.parse(fs.readFileSync(`./${project_dir}/package.json`, { encoding: "utf-8" }));
    input_json["scripts"]["prettier_file"] = 'prettier --write "./pages/**/*.{js,jsx}"';
    input_json["scripts"]["gitUpdate"] = `git add . && git commit -m"update ${project_dir},"`;
    input_json["scripts"]["init_dev"] = "yarn --dev && yarn dev";
    input_json["scripts"]["clear"] = "rm -rf node_modules && rm -rf .next";
    input_json["scripts"]["docker_rebuild"] = "docker compose up -d --build && docker compose logs -f";
    input_json["scripts"]["into_docker"] = "docker compose exec -it next /bin/bash";

    fs.writeFileSync(`./${project_dir}/package.json`, JSON.stringify(input_json, null, 2), { encoding: "utf-8" });
  }
});
