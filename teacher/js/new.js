function addNewForm() {
  const lesson_video_list = document.getElementById("lesson-video-list");

  const form = document.createElement("div");
  form.classList.add("card", "mb-3");
  form.innerHTML = `
      <div class="card-body">
        <div class="row mb-3">
          <label for="lessonTitle" class="col-sm-2 col-form-label">Lesson title</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="lessonTitle">
          </div>
        </div>
        <div class="row mb-3">
          <label for="lessonDescription" class="col-sm-2 col-form-label">Lesson description</label>
          <div class="col-sm-10">
            <textarea class="form-control" id="lessonDescription" rows="3"></textarea>
          </div>
        </div>
        <div class="row mb-3">
          <label for="lessonVideo" class="col-sm-2 col-form-label">Lesson Video</label>
          <div class="col-sm-10">
            <input class="form-control" type="file" id="lessonVideo">
          </div>
        </div>
      </div>
    `;

  lesson_video_list.appendChild(form);
}

var stepper = new Stepper(document.querySelector(".bs-stepper"));
var next = document.getElementById("next");
const description_prev = document.getElementById("description-previous");
const description_next = document.getElementById("description-next");
const lesson_prev = document.getElementById("lesson-previous");
const lesson_next = document.getElementById("lesson-next");

description_next.addEventListener("click", (event) => {
  stepper.next();
});

description_prev.addEventListener("click", (event) => {
  stepper.previous();
});

lesson_next.addEventListener("click", (event) => {
  stepper.next();
});

lesson_prev.addEventListener("click", (event) => {
  stepper.previous();
});

next.addEventListener("click", (event) => {
  stepper.next();
});
