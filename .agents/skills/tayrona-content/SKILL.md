---
name: tayrona-content
description: Maintain Tayrona's structured content architecture for products, categories, specials, festivals, services, pages, FAQs and media.
---
# Tayrona Content

Keep business content independent from presentation whenever practical.

Core concepts:
- Product
- Category
- Service
- Special
- Festival
- MediaAsset
- Page
- FAQ

Do not select a CMS or database unless explicitly approved.

Products should be representable independently from their visual component. Possible fields include id, name, slug, description, price, category, images, servings, dietary information, featured, available and sort order, but only use fields supported by requirements.

Festivals should support name, location, start date, end date, image, description, status and featured. Public festival content must be changeable without rewriting page components.

Never invent prices, testimonials, reviews, ingredients, legal claims, delivery promises, opening hours or business facts.

If an admin/content foundation is created, conceptually separate content-management permissions from payments, refunds, financial administration and sensitive customer data.
