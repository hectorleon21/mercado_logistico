from django import template

register = template.Library()

@register.filter
def class_name(obj):
    """Devuelve el nombre de la clase de un objeto como string."""
    return obj.__class__.__name__ 