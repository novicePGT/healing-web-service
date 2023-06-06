package kr.jj.healingwebservice.domain.item;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class ItemRepository {

    private static final Map<Long, ImageItem> store = new HashMap<>();
    private static Long sequence = 0L;

    public ImageItem save(ImageItem item) {
        item.setId(++sequence);
        store.put(item.getId(), item);
        return item;
    }

    public ImageItem findById(Long id) {
        return store.get(id);
    }

    /**
     * ArrayList 로 감싸는 이유는 데이터가 변하지 않게 하기 위함.
     * @return
     */
    public List<ImageItem> findAll() {
        return new ArrayList<>(store.values());
    }

    public void clearStore() {
        store.clear();
    }
}
