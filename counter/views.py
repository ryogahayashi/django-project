from typing import Any, Dict
from django.views.generic import TemplateView


class IndexView(TemplateView):
    template_name = "index.html"
    
class CountView(TemplateView):
    template_name = "count.html"
