from django.core.exceptions import ValidationError

def validate_image_size(image):
    filesize = image.size
    megabyte_limit = 2.0
    if filesize > megabyte_limit * 1024 * 1024:
        raise ValidationError(f"La imagen no puede exceder {megabyte_limit}MB")