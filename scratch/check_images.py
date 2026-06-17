import os
from PIL import Image

workspace_dir = r"c:\Users\Rei\Documents\IDEA\pixel-group"

candidates = [
    os.path.join(workspace_dir, "public", "logo.png"),
    os.path.join(workspace_dir, "public", "logo-idea.png"),
    os.path.join(workspace_dir, "extracted_images", "extracted_img_140.jpg"),
    os.path.join(workspace_dir, "extracted_images", "extracted_img_152.jpg")
]

for path in candidates:
    if os.path.exists(path):
        try:
            with Image.open(path) as img:
                print(f"Path: {path}")
                print(f"Format: {img.format}, Size: {img.size}, Mode: {img.mode}")
        except Exception as e:
            print(f"Error reading {path}: {e}")
    else:
        print(f"Not found: {path}")
