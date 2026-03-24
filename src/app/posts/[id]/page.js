const PostPage = async ({ params }) => {
  const { id } = await params;
  return (
    <div>
      <h1>Titulo: {id}</h1>
      <p>Texto do post...</p>
    </div>
  );
};

export default PostPage;
