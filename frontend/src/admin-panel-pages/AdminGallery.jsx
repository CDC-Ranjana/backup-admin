import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addGallery, getGalleryImages, removeGallery, updateGalleryImage } from '../Reducers/gallerySlice';

const Gallery = () => {
  const dispatch = useDispatch();
  const { gallery, status } = useSelector((state) => state.gallery);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const [formData, setFormData] = useState({ title: '', image: null });

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getGalleryImages());
    }
  }, [status, dispatch]);

  const handleAddPost = () => {
    const formDataToSend = new FormData();
    if (formData.title) formDataToSend.append('title', formData.title);
    if (formData.image) formDataToSend.append('image', formData.image);

    dispatch(addGallery(formDataToSend));
    toast.success('Successfully added gallery image');
    setIsModalOpen(false);
    resetForm();
  };

  const handleUpdatePost = () => {
    const updatedData = new FormData();
    if (formData.title) updatedData.append('title', formData.title);
    if (formData.image) updatedData.append('image', formData.image);

    dispatch(updateGalleryImage({ id: currentPost._id, updatedData }));
    toast.success('Successfully updated gallery image');
    setIsModalOpen(false);
    resetForm();
  };

  const handleDeletePost = (id) => {
    dispatch(removeGallery(id));
    toast.success('Successfully deleted gallery image');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files[0] }));
  };

  const resetForm = () => {
    setFormData({ title: '', image: null });
    setCurrentPost(null);
  };

  const openUpdateModal = (post) => {
    setIsModalOpen(true);
    setIsUpdateMode(true);
    setCurrentPost(post);
    setFormData({
      title: post.title || '',
      image: null,
    });
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between px-14 pb-4">
        <h1 className="text-4xl">Hero Banners</h1>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => {
            setIsModalOpen(true);
            setIsUpdateMode(false);
            resetForm();
          }}
        >
          Add Banner
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-11/12 md:w-1/2">
            <h2 className="text-xl font-bold mb-4">
              {isUpdateMode ? 'Update Banner' : 'Add New Banner'}
            </h2>
            <form>
              <div className="mb-4">
                <label className="block font-semibold mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-2">Image</label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-400 text-white rounded"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                  onClick={isUpdateMode ? handleUpdatePost : handleAddPost}
                >
                  {isUpdateMode ? 'Update Banner' : 'Add Banner'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-4">
        {gallery.length > 0 ? (
          gallery.map((post) => (
            <div
              key={post._id}
              className="border p-4 rounded w-64 hover:shadow-lg"
            >
              <img
                src={post.image || 'https://via.placeholder.com/150'}
                alt="Hero Banner"
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-lg font-bold mt-2">{post.title}</h3>
              <div className="mt-4 flex gap-4">
                <button
                  className="text-blue-600 hover:underline cursor-pointer"
                  onClick={() => openUpdateModal(post)}
                >
                  Update
                </button>
                <button
                  className="text-red-600 hover:underline cursor-pointer"
                  onClick={() => handleDeletePost(post._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No Images found.</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;
