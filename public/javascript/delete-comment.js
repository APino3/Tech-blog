async function deleteComment(id) {
  const response = await fetch(`/api/comments/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}
