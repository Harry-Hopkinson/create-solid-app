import { createResource } from "solid-js";

function wait(ms, data) {
  return new Promise((resolve) => setTimeout(resolve, ms, data));
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fetchName() {
  return wait(random(500, 1000), "Solid");
}

const AboutData = () => {
  const [data] = createResource(fetchName);

  return data;
};

export default AboutData;
