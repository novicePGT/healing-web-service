package kr.jj.healingwebservice.web.controller;

import kr.jj.healingwebservice.domain.item.ImageItem;
import kr.jj.healingwebservice.domain.item.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping
@RequiredArgsConstructor
public class PageController {

    private final ItemRepository itemRepository;

    @GetMapping("/{country}")
    public String images(@PathVariable String country, Model model) {
        List<ImageItem> items = itemRepository.findAll();
        model.addAttribute("items", items);
        return country;
    }
}
