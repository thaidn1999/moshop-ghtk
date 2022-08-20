<template>
  <div class="profile-image_info mb-5">
    <fieldset style="padding-top: 36px" class="wrap-form text-base text-black">
      <legend class="form-title">Hồ sơ nhân viên</legend>
      <div class="profile-staff-list">
        <div class="id-card">
          <div class="staffProfile__title">Chứng minh thư</div>
          <div class="id-card-images">
            <div class="eachImage hidden">
              <img
                src="../../assets/images/avatar_ghtk.png"
                class="upload-image"
              />
              <div class="eachImage__action">
                <div class="eachImage__action--view">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <div class="eachImage__action--remove">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <label for="id-card-files" class="btn addImageLabel">
              <span class="id-card-detail">
                <span class="inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
                <div>Thêm ảnh</div>
              </span>
            </label>
            <input
              id="id-card-files"
              type="file"
              multiple
              accept="image/*"
              style="visibility: hidden; width: 0px"
            />
          </div>
        </div>
        <div class="curriculum">
          <div class="staffProfile__title">Sơ yếu lý lịch</div>
          <div class="curriculum-images">
            <div class="eachImage hidden">
              <img
                src="../../assets/images/avatar_ghtk.png"
                class="upload-image"
              />
              <div class="eachImage__action">
                <div class="eachImage__action--view">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <div class="eachImage__action--remove">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <label for="curriculum-files" class="btn addImageLabel">
              <span class="curriculum-detail">
                <span class="inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
                <div>Thêm ảnh</div>
              </span>
            </label>
            <input
              id="curriculum-files"
              type="file"
              multiple
              accept="image/*"
              style="visibility: hidden; width: 0px"
            />
          </div>
        </div>
        <div class="profile">
          <div class="staffProfile__title">Hồ sơ</div>
          <div class="profile-images">
            <div class="eachImage hidden">
              <img
                src="../../assets/images/avatar_ghtk.png"
                class="upload-image"
              />
              <div class="eachImage__action">
                <div class="eachImage__action--view">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <div class="eachImage__action--remove">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <label for="profile-files" class="btn addImageLabel">
              <span class="profile-detail">
                <span class="inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
                <div>Thêm ảnh</div>
              </span>
            </label>
            <input
              id="profile-files"
              type="file"
              multiple
              accept="image/*"
              style="visibility: hidden; wid; width: 0px"
            />
          </div>
        </div>
      </div>
    </fieldset>
  </div>
</template>
<style scoped>
.wrap-form {
  padding: 18px 30px 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 25%);
  position: relative;
}
.form-title {
  display: block;
  width: auto;
  padding: 6px 20px;
  margin-bottom: 0;
  font-weight: 500;
  font-size: 16px;
  border: 1px solid #ccc;
  background: #fff;
}
.staffProfile__title {
  font-weight: 500;
  margin-bottom: 5px;
}
.id-card-images,
.profile-images,
.curriculum-images {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 15px;
}
.btn {
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.id-card-detail,
.curriculum-detail,
.profile-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  height: 80px;
  justify-content: center;
  border: 1px dashed #aaa;
  font-size: 14px;
  color: #069255;
  border-radius: 0.625rem;
}
.id-card-detail:hover,
.curriculum-detail:hover,
.profile-detail:hover {
  color: #fff;
  background-color: #069255;
}
.eachImage {
  position: relative;
  margin: 0.5rem 0.5rem 0.5rem 0;
}
.upload-image {
  width: 128px;
  height: 128px;
  object-fit: cover;
}
.eachImage__action {
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}
.eachImage:hover .eachImage__action {
  display: flex;
}
.eachImage__action--view {
  margin-right: 15px;
}
.eachImage__action--view,
.eachImage__action--remove {
  cursor: pointer;
}
</style>
