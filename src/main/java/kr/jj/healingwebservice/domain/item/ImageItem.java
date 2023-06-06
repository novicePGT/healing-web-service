package kr.jj.healingwebservice.domain.item;

import lombok.Data;

/**
 * 이 클래스는 이미지의 데이터를 담기 위해서 만들어진 클래스임.
 * @Data -> 모든 필드에 대해 Getter와 Setter를 자동으로 생성 + equals(), hashCode(), toString()
 */

@Data
public class ImageItem {

    private Long id;
    private String imageName;
    private String imageUrl;

    /**
     * 매개변수 없는 빈 생성자를 생성한 이유는 다음과 같다.
     * Java Bean 규약을 따르기 위함.
     * 객체 직렬화를 위해서는 매개변수 없는 생성자가 필요하다
     * -> 직렬화 이유: 객체를 영구적으로 저장하고 복원 가능 + 캐시에 저장 가능 + 네트워크로 전송 가능 + 분산 환경에서 객체 공유 가능
     */
    public ImageItem() {

    }

    public ImageItem(Long id, String imageName, String imageUrl) {
        this.id = id;
        this.imageName = imageName;
        this.imageUrl = imageUrl;
    }
}
