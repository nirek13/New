// Photo tagging and search functionality
document.addEventListener('DOMContentLoaded', function() {
    // Define initial tags for existing photos (you can customize these)
    const initialPhotoTags = {
      "/assets/PhotoGallery/IMG_4350.png": ["event", "hawkhacks", "ceremony", "indoor"],
      "./assets/PhotoGallery/IMG_4355.png": ["architecture", "night", "laurier", "building"],
      "assets/PhotoGallery/IMG_4539.png": ["exhibition", "collision", "conference", "indoor"],
      "assets/PhotoGallery/IMG_4547.png": ["people", "collision", "conference", "speaker"],
      "assets/PhotoGallery/IMG_4549.png": ["people", "vinoid", "khosla", "collision", "speaker"],
      "assets/PhotoGallery/IMG_4556.png": ["architecture", "tower", "building", "outdoor"],
      "assets/PhotoGallery/IMG_4558.png": ["sign", "collision", "conference", "outdoor"],
      "assets/PhotoGallery/IMG_4607.png": ["animal", "dog", "pet", "cute"]
    };
    
    // Track all photos and their tags
    let photoTags = loadPhotoTags() || initialPhotoTags;
    
    // Create and insert the search/filter UI
    createSearchInterface();
    
    // Apply tags to gallery items
    applyTagsToGallery();
    
    // Function to create search interface
    function createSearchInterface() {
      // Create search container
      const searchContainer = document.createElement('div');
      searchContainer.className = 'gallery-search-container';
      searchContainer.innerHTML = `
        <div class="search-box">
          <input type="text" id="gallery-search" placeholder="Search by tags...">
          <button id="search-button"><i class="fa fa-search"></i></button>
        </div>
        <div class="filter-tags" id="filter-tags"></div>
        <div class="tag-suggestions" id="tag-suggestions"></div>
      `;
      
      // Insert before gallery
      const gallery = document.querySelector('.gallery');
      gallery.parentNode.insertBefore(searchContainer, gallery);
      
      // Generate filter tags
      updateFilterTags();
      
      // Add event listeners
      document.getElementById('gallery-search').addEventListener('input', handleSearch);
      document.getElementById('search-button').addEventListener('click', handleSearch);
      
      // Add clear button functionality
      const clearButton = document.createElement('button');
      clearButton.id = 'clear-filters';
      clearButton.innerHTML = 'Clear Filters';
      clearButton.style.display = 'none';
      searchContainer.appendChild(clearButton);
      
      clearButton.addEventListener('click', function() {
        document.getElementById('gallery-search').value = '';
        const activeTags = document.querySelectorAll('.filter-tag.active');
        activeTags.forEach(tag => tag.classList.remove('active'));
        showAllGalleryItems();
        this.style.display = 'none';
      });
    }
    
    // Function to generate all unique tags
    function getAllUniqueTags() {
      const uniqueTags = new Set();
      Object.values(photoTags).forEach(tags => {
        tags.forEach(tag => uniqueTags.add(tag));
      });
      return Array.from(uniqueTags).sort();
    }
    
    // Update filter tags UI
    function updateFilterTags() {
      const filterTagsContainer = document.getElementById('filter-tags');
      filterTagsContainer.innerHTML = '';
      
      const allTags = getAllUniqueTags();
      
      allTags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'filter-tag';
        tagElement.textContent = tag;
        
        tagElement.addEventListener('click', function() {
          this.classList.toggle('active');
          filterGalleryByTags();
          
          // Show clear button if any filters are active
          const hasActiveFilters = document.querySelectorAll('.filter-tag.active').length > 0 || 
                                  document.getElementById('gallery-search').value.trim() !== '';
          document.getElementById('clear-filters').style.display = hasActiveFilters ? 'block' : 'none';
        });
        
        filterTagsContainer.appendChild(tagElement);
      });
    }
    
    // Apply tags to gallery items
    function applyTagsToGallery() {
      const galleryItems = document.querySelectorAll('.gallery-item');
      
      galleryItems.forEach(item => {
        const img = item.querySelector('img');
        const imgSrc = img.getAttribute('src');
        
        // Create tags container
        const tagsContainer = document.createElement('div');
        tagsContainer.className = 'photo-tags';
        
        // Get tags or use empty array
        const tags = photoTags[imgSrc] || [];
        
        // Add tags to UI
        tags.forEach(tag => {
          const tagElement = document.createElement('span');
          tagElement.className = 'photo-tag';
          tagElement.textContent = tag;
          tagsContainer.appendChild(tagElement);
        });
        
        // Add edit tags button
        const editButton = document.createElement('button');
        editButton.className = 'edit-tags-btn';
        editButton.innerHTML = '<i class="fa fa-tags"></i>';
        editButton.addEventListener('click', function(e) {
          e.stopPropagation();
          openTagEditor(item, imgSrc);
        });
        
        item.appendChild(tagsContainer);
        item.appendChild(editButton);
      });
    }
    
    // Open tag editor modal
    function openTagEditor(item, imgSrc) {
      // Create modal
      const modal = document.createElement('div');
      modal.className = 'tag-editor-modal';
      
      const currentTags = photoTags[imgSrc] || [];
      
      modal.innerHTML = `
        <div class="tag-editor-content">
          <h3>Edit Tags</h3>
          <div class="current-tags" id="current-tags"></div>
          <div class="tag-input-container">
            <input type="text" id="new-tag-input" placeholder="Add new tag...">
            <button id="add-tag-btn">Add</button>
          </div>
          <div class="tag-suggestions" id="edit-tag-suggestions"></div>
          <div class="tag-editor-actions">
            <button id="save-tags-btn">Save</button>
            <button id="cancel-tags-btn">Cancel</button>
          </div>
        </div>
      `;
      
      document.body.appendChild(modal);
      
      // Show existing tags
      const currentTagsContainer = document.getElementById('current-tags');
      currentTags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.className = 'current-tag';
        tagEl.innerHTML = `${tag} <i class="fa fa-times"></i>`;
        
        tagEl.querySelector('i').addEventListener('click', function() {
          tagEl.remove();
        });
        
        currentTagsContainer.appendChild(tagEl);
      });
      
      // Show tag suggestions
      const allTags = getAllUniqueTags();
      const suggestions = document.getElementById('edit-tag-suggestions');
      
      allTags.forEach(tag => {
        if (!currentTags.includes(tag)) {
          const suggTag = document.createElement('span');
          suggTag.className = 'tag-suggestion';
          suggTag.textContent = tag;
          
          suggTag.addEventListener('click', function() {
            addTagToEditor(this.textContent);
          });
          
          suggestions.appendChild(suggTag);
        }
      });
      
      // Add new tag
      function addTagToEditor(tagText) {
        const existingTags = Array.from(currentTagsContainer.querySelectorAll('.current-tag'))
          .map(el => el.textContent.trim().replace(' ×', ''));
        
        if (!existingTags.includes(tagText)) {
          const tagEl = document.createElement('span');
          tagEl.className = 'current-tag';
          tagEl.innerHTML = `${tagText} <i class="fa fa-times"></i>`;
          
          tagEl.querySelector('i').addEventListener('click', function() {
            tagEl.remove();
          });
          
          currentTagsContainer.appendChild(tagEl);
        }
        
        document.getElementById('new-tag-input').value = '';
      }
      
      // Add tag button
      document.getElementById('add-tag-btn').addEventListener('click', function() {
        const newTag = document.getElementById('new-tag-input').value.trim().toLowerCase();
        if (newTag) {
          addTagToEditor(newTag);
        }
      });
      
      // Enter key to add tag
      document.getElementById('new-tag-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          const newTag = this.value.trim().toLowerCase();
          if (newTag) {
            addTagToEditor(newTag);
          }
        }
      });
      
      // Save tags
      document.getElementById('save-tags-btn').addEventListener('click', function() {
        const newTags = Array.from(currentTagsContainer.querySelectorAll('.current-tag'))
          .map(el => el.textContent.trim().replace(' ×', ''));
        
        photoTags[imgSrc] = newTags;
        savePhotoTags();
        
        // Update the item's tags
        const tagsContainer = item.querySelector('.photo-tags');
        tagsContainer.innerHTML = '';
        
        newTags.forEach(tag => {
          const tagElement = document.createElement('span');
          tagElement.className = 'photo-tag';
          tagElement.textContent = tag;
          tagsContainer.appendChild(tagElement);
        });
        
        // Update filter tags
        updateFilterTags();
        
        // Close modal
        modal.remove();
      });
      
      // Cancel
      document.getElementById('cancel-tags-btn').addEventListener('click', function() {
        modal.remove();
      });
      
      // Close when clicking outside
      modal.addEventListener('click', function(e) {
        if (e.target === modal) {
          modal.remove();
        }
      });
    }
    
    // Handle search input
    function handleSearch() {
      const searchTerm = document.getElementById('gallery-search').value.trim().toLowerCase();
      
      // If there's a search term, filter by it
      if (searchTerm) {
        filterGalleryBySearch(searchTerm);
        document.getElementById('clear-filters').style.display = 'block';
      } else {
        // If no search term but active tag filters, use those
        const activeTags = document.querySelectorAll('.filter-tag.active');
        if (activeTags.length > 0) {
          filterGalleryByTags();
        } else {
          // No filters active, show all
          showAllGalleryItems();
          document.getElementById('clear-filters').style.display = 'none';
        }
      }
    }
    
    // Filter gallery by search term
    function filterGalleryBySearch(searchTerm) {
      const galleryItems = document.querySelectorAll('.gallery-item');
      const activeTags = Array.from(document.querySelectorAll('.filter-tag.active'))
        .map(tag => tag.textContent.toLowerCase());
      
      galleryItems.forEach(item => {
        const img = item.querySelector('img');
        const imgSrc = img.getAttribute('src');
        const imgTags = photoTags[imgSrc] || [];
        const caption = item.querySelector('.caption').textContent.toLowerCase();
        
        // Check if item matches search term in tags or caption
        const matchesSearch = imgTags.some(tag => tag.includes(searchTerm)) || 
                            caption.includes(searchTerm);
        
        // Check if item matches active tag filters
        const matchesTags = activeTags.length === 0 || 
                          activeTags.every(tag => imgTags.includes(tag));
        
        // Show item only if it matches both search and tag filters
        if (matchesSearch && matchesTags) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    }
    
    // Filter gallery by active tags
    function filterGalleryByTags() {
      const activeTags = Array.from(document.querySelectorAll('.filter-tag.active'))
        .map(tag => tag.textContent.toLowerCase());
      
      if (activeTags.length === 0) {
        handleSearch(); // Fall back to search term filtering
        return;
      }
      
      const searchTerm = document.getElementById('gallery-search').value.trim().toLowerCase();
      const galleryItems = document.querySelectorAll('.gallery-item');
      
      galleryItems.forEach(item => {
        const img = item.querySelector('img');
        const imgSrc = img.getAttribute('src');
        const imgTags = photoTags[imgSrc] || [];
        const caption = item.querySelector('.caption').textContent.toLowerCase();
        
        // Check if item matches all active tag filters
        const matchesTags = activeTags.every(tag => imgTags.includes(tag));
        
        // Check if item matches search term
        const matchesSearch = !searchTerm || 
                            imgTags.some(tag => tag.includes(searchTerm)) || 
                            caption.includes(searchTerm);
        
        // Show item only if it matches both tag filters and search
        if (matchesTags && matchesSearch) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    }
    
    // Show all gallery items
    function showAllGalleryItems() {
      const galleryItems = document.querySelectorAll('.gallery-item');
      galleryItems.forEach(item => {
        item.style.display = '';
      });
    }
    
    // Save photo tags to localStorage
    function savePhotoTags() {
      localStorage.setItem('NirekShetty-photo-tags', JSON.stringify(photoTags));
    }
    
    // Load photo tags from localStorage
    function loadPhotoTags() {
      try {
        const saved = localStorage.getItem('NirekShetty-photo-tags');
        return saved ? JSON.parse(saved) : null;
      } catch (e) {
        console.error('Error loading photo tags', e);
        return null;
      }
    }
  });