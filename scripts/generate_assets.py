import os
import math
from PIL import Image, ImageDraw, ImageFilter

os.makedirs("/Users/hasnibachiri/Desktop/yasline/public/assets", exist_ok=True)

def create_editorial_image(filename, primary_color, secondary_color, pattern_type="architecture"):
    width, height = 1200, 800
    img = Image.new("RGB", (width, height), primary_color)
    draw = ImageDraw.Draw(img)

    if pattern_type == "architecture":
        for i in range(14):
            w = width - (i * 75)
            h = height - (i * 45)
            x0 = (width - w) / 2
            y0 = (height - h) / 2
            alpha_color = (
                int(primary_color[0] + (secondary_color[0] - primary_color[0]) * (i / 14)),
                int(primary_color[1] + (secondary_color[1] - primary_color[1]) * (i / 14)),
                int(primary_color[2] + (secondary_color[2] - primary_color[2]) * (i / 14))
            )
            draw.rectangle([x0, y0, x0 + w, y0 + h], outline=alpha_color, width=3)
            draw.ellipse([x0, y0, x0 + w, y0 + h], outline=(212, 175, 55), width=2)
            
    elif pattern_type == "minimal_studio":
        for r in range(600, 0, -12):
            factor = (600 - r) / 600
            c = (
                int(primary_color[0] + (secondary_color[0] - primary_color[0]) * factor),
                int(primary_color[1] + (secondary_color[1] - primary_color[1]) * factor),
                int(primary_color[2] + (secondary_color[2] - primary_color[2]) * factor)
            )
            draw.ellipse([600 - r, 400 - r, 600 + r, 400 + r], fill=c)
        
        for angle in range(0, 360, 30):
            rad = math.radians(angle)
            x2 = 600 + math.cos(rad) * 500
            y2 = 400 + math.sin(rad) * 500
            draw.line([600, 400, x2, y2], fill=(212, 175, 55), width=3)

    elif pattern_type == "craftsmanship":
        for y in range(0, height, 40):
            color_step = (y / height)
            c = (
                int(primary_color[0] * (1 - color_step * 0.3)),
                int(primary_color[1] * (1 - color_step * 0.3)),
                int(primary_color[2] * (1 - color_step * 0.3))
            )
            draw.line([0, y, width, y], fill=c, width=38)
            draw.line([0, y + 38, width, y + 38], fill=(212, 175, 55), width=2)
        
        for offset in range(-600, 1800, 120):
            draw.line([offset, 0, offset + 800, height], fill=(212, 175, 55), width=3)

    elif pattern_type == "analog_mind":
        for r in range(50, 700, 45):
            draw.ellipse([600 - r, 400 - r, 600 + r, 400 + r], outline=(212, 175, 55), width=3)
            
    img = img.filter(ImageFilter.GaussianBlur(radius=1.2))
    out_path = os.path.join("/Users/hasnibachiri/Desktop/yasline/public/assets", filename)
    img.save(out_path, quality=92)
    print(f"Generated asset: {out_path}")

create_editorial_image("exp-no-purchases.jpg", (25, 25, 30), (70, 60, 40), "minimal_studio")
create_editorial_image("exp-workweek.jpg", (30, 28, 24), (120, 100, 50), "architecture")
create_editorial_image("exp-cook.jpg", (40, 32, 25), (150, 110, 45), "craftsmanship")
create_editorial_image("exp-analog.jpg", (20, 22, 28), (80, 75, 60), "analog_mind")
create_editorial_image("exp-toolshed.jpg", (35, 30, 25), (140, 115, 55), "craftsmanship")
create_editorial_image("exp-zerowaste.jpg", (22, 30, 26), (60, 100, 70), "minimal_studio")

create_editorial_image("question-home.jpg", (32, 28, 25), (135, 110, 50), "architecture")
create_editorial_image("question-work.jpg", (25, 25, 35), (90, 80, 110), "analog_mind")
create_editorial_image("question-community.jpg", (30, 25, 20), (140, 105, 45), "craftsmanship")
