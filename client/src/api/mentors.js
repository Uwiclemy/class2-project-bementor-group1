const API_URL = "http://localhost:4000";

export const getMentors = () => {
  return fetch(`${API_URL}/mentor`).then(response => response.json());
};

export const searchMentors = query => {
  return fetch(`${API_URL}/mentor/search?text={query}`).then(response =>
    response.json()
  );
};
