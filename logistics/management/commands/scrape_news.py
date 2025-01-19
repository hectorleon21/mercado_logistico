# logistics/management/commands/scrape_news.py
from django.core.management.base import BaseCommand
from ...scraper import NewsScraperManager

class Command(BaseCommand):
    help = 'Scrape news from configured sources'

    def handle(self, *args, **options):
        manager = NewsScraperManager()
        news_items = manager.scrape_all()
        manager.save_news(news_items)
        self.stdout.write(self.style.SUCCESS(f'Successfully scraped {len(news_items)} news items'))