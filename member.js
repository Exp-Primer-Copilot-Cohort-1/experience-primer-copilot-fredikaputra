function skillsMember() {
  const member = document.querySelector(".member");
  const memberSkills = document.querySelector(".member__skills");
  const memberSkillsList = document.querySelector(".member__skills-list");
  const memberSkillsItem = document.querySelectorAll(".member__skills-item");
  const memberSkillsItemText = document.querySelectorAll(
    ".member__skills-item-text"
  );

  if (member) {
    member.addEventListener("click", () => {
      memberSkills.classList.toggle("member__skills--active");
      memberSkillsList.classList.toggle("member__skills-list--active");
      memberSkillsItem.forEach((item) => {
        item.classList.toggle("member__skills-item--active");
      });
      memberSkillsItemText.forEach((item) => {
        item.classList.toggle("member__skills-item-text--active");
      });
    });
  }
}
