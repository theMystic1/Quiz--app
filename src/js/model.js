export let state = {
  quizzes: {},
};

export const fetchData = async function (quiz) {
  try {
    const res = await fetch('data.json');

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    state.quizzes = data.quizzes;
  } catch (error) {
    console.error(error);
  }
};

// console.log(fetchData());
